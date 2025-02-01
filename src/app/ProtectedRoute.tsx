'use client';

import { FC, useEffect } from 'react';
import { Button, Center, VStack, Text, Box, Code } from '@chakra-ui/react';

import Log from '@/helpers/Log';
import FramerPage from './FramerPage';
import { logout } from '@/store/actions';
import { useRouter } from 'next/navigation';
import { clearStore } from '@/store/reducers';
import { ErrorBoundary } from 'react-error-boundary';
import { useAppDispatch, useAppSelector } from '@/store/ReduxHook';

interface ProtectedRouteProps {
  children: React.ReactNode;
  animated?: boolean;
}
const ProtectedRoute: FC<ProtectedRouteProps> = ({
  children,
  animated = false,
}) => {
  const router = useRouter();
  const { accessToken } = useAppSelector((s) => s.auth) || {};

  useEffect(() => {
    // to do uncomment this
    if (!accessToken) {
      router.push('/login');
    }
  }, [accessToken]);

  const errorFallback = ({ error }: { error: Error }) => {
    const router = useRouter();

    const dispatch = useAppDispatch();

    const handleLogout = () => {
      dispatch(
        logout({
          callback: (cb: any) => {
            dispatch(clearStore());
            localStorage.clear();
            router.replace('/login');
          },
        })
      );
    };

    const goToHome = () => {
      router.push('/'); // Redirect to home page
    };

    const getErrorLocation = (stack: string) => {
      const lines = stack.split('\n');
      const locationLine = lines.find((line) => line.includes('at '));

      if (locationLine) {
        // Match typical format of file paths and line/column numbers
        const match = locationLine.match(/at (.+):(\d+):(\d+)/);
        if (match) {
          return `${match[1]} (Line: ${match[2]}, Column: ${match[3]})`;
        }
      }
      return 'Location not available';
    };

    const errorLocation = getErrorLocation(error.stack || '');

    return (
      <Center  bg='gray.100' px={4}>
        <VStack
          spacing={6}
          textAlign='center'
          bg='white'
          p={8}
          borderRadius='lg'
          boxShadow='lg'
        >
          <Box>
            <Text fontSize='2xl' fontWeight='bold' color='red.500'>
              Something went wrong
            </Text>
            <Text color='gray.600' mt={2}>
              We encountered an unexpected error. Please try again.
            </Text>
          </Box>

          <VStack spacing={4} w='full'>
            <Button colorScheme='teal' w='full' onClick={handleLogout}>
              Logout
            </Button>
            <Button colorScheme='gray' w='full' onClick={goToHome}>
              Go to Home
            </Button>
          </VStack>

          {process.env.NODE_ENV === 'development' && (
            <Box
              mt={6}
              p={4}
              bg='gray.800'
              color='white'
              borderRadius='md'
              w='full'
            >
              <Text fontSize='md' fontWeight='bold'>
                Error Details (Development Mode)
              </Text>
              <Code mt={2} fontSize='sm' whiteSpace='pre-wrap' w='full'>
                {error.toString()}
              </Code>
              <Text mt={2} fontWeight='bold'>
                Error Location:
              </Text>
              <Code fontSize='sm' whiteSpace='pre-wrap' w='full'>
                {errorLocation}
              </Code>
            </Box>
          )}
        </VStack>
      </Center>
    );
  };
  const handleError = (error: Error) => {
    Log('ProtectedRoute encountered an error', error);
    // router.push('/login'); // Redirect to login page on error
  };

  return (
    <ErrorBoundary FallbackComponent={errorFallback} onError={handleError}>
      {animated ? <FramerPage>{children}</FramerPage> : children}
    </ErrorBoundary>
  );
};

export default ProtectedRoute;
