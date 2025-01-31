`use client`;
// components/ErrorBoundary.tsx
import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import NextLink from 'next/link';

const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  console.error('Uncaught error:', error);

  return (
    <Box
      px={6}
      py={10}
      bg='gray.700'
      color='white'
      display='flex'
      height='100vh'
      textAlign='center'
      alignItems='center'
      justifyContent='center'
    >
      <Box>
        <Heading as='h1' size='2xl'>
          Oops!
        </Heading>
        <Text fontSize='xl' mt={4}>
          Something went wrong.
        </Text>
        <NextLink href='/' passHref>
          <Button
            mt={4}
            as='div'
            mr={2}
            colorScheme='blue'
            bg='#286FCE'
            color='white'
            _hover={{ bg: '#2857CE' }}
          >
            Go to Home
          </Button>
        </NextLink>
        <Button
          mt={4}
          onClick={resetErrorBoundary}
          colorScheme='blue'
          bg='#286FCE'
          color='white'
          _hover={{ bg: '#2857CE' }}
        >
          Reload Page
        </Button>
      </Box>
    </Box>
  );
};

const AppErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default AppErrorBoundary;
