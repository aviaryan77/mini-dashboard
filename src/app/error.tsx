'use client';
import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      bgGradient='linear(to-r, teal.50, teal.100)'
      p={4}
    >
      <VStack spacing={6} textAlign='center'>
        <Flex justifyContent='center' mt={20}>
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
  );
};

export default NotFoundPage;
