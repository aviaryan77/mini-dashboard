'use client';
import Sidebar from '@/components/Sidebar';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-12 xl:px-20 2xl:px-48 max-h-[80%]'>
      <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark '>
        <Box
          display='flex'
          alignItems='center'
          flex={1}
          justifyContent='center'
          bgGradient='linear(to-r, teal.50, teal.100)'
          p={4}
        >
          <VStack spacing={6} textAlign='center'>
            <Flex justifyContent='center'>
              <Image
                src='/images/userSettings.png'
                alt='teacher'
                width={300}
                height={300}
              />
            </Flex>
            <Heading size='2xl' color='teal.600'>
              404 - Page Not Found
            </Heading>
            <Text fontSize='lg' color='gray.600'>
              Oops! The page you're looking for doesn't exist or has been moved.
            </Text>
            <Button
              colorScheme='teal'
              size='lg'
              onClick={handleGoHome}
              _hover={{ bg: 'teal.700' }}
            >
              Go Back Home
            </Button>
          </VStack>
        </Box>
      </div>
    </div>
  );
};

export default NotFoundPage;
