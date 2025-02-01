'use client';

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  IconButton,
  Container,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useTheme } from 'next-themes';
import { CN_Link } from '@/components/theme';

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const bgGradient =
    theme === 'light'
      ? // ? 'linear(to-r, blue.400, teal.300)'
        'linear(to-r, white, gray.300)'
      : 'linear(to-r, gray.800, gray.600)';

  const textColor = theme === 'light' ? 'gray.800' : 'gray.200';

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Box bgGradient={bgGradient} p={8} flex={1}>
      {/* Navbar */}
      <HStack justify='space-between' w='full' maxW='1200px' mx='auto' mb={8}>
        <Heading color={textColor} fontSize='2xl'>
          Brand Logo
        </Heading>
        <IconButton
          aria-label='Toggle theme'
          icon={theme === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={changeTheme}
          bg='transparent'
          color={textColor}
          _hover={{ bg: 'whiteAlpha.300' }}
        />
      </HStack>

      {/* Hero Section */}
      <Container maxW='4xl' centerContent>
        <VStack textAlign='center' spacing={6} mt={10}>
          <Heading
            fontSize={['3xl', '4xl']}
            fontWeight='bold'
            color={textColor}
          >
            Empowering Businesses with Data-Driven Insights
          </Heading>
          <Text fontSize='lg' color={textColor} maxW='3xl'>
            Get a complete overview of your sales performance with real-time
            analytics. Make informed decisions and grow your business
            effortlessly.
          </Text>

          <CN_Link
            href='/analytics'
            className='w-6/12 px-5 py-2 my-3 rounded-md bg-gradient-to-r from-green-400 to-blue-400 justify-center'
          >
            Get Started
          </CN_Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default HomePage;
