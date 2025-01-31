'use client';
import React from 'react';
import {
  Flex,
  Icon,
  Center,
  IconButton,
  Box,
  Text,
  Input,
} from '@chakra-ui/react';

import { HamburgerIcon, SearchIcon, PhoneIcon } from '@chakra-ui/icons';


const Header = () => {
  return (
    <Flex border='1px solid grey' justify='space-between' bg='#AAAAAA'>
      {/* Menu Icon hamburger */}
      <Box py={6} px={10}>
        <HamburgerIcon />
      </Box>
      <Flex align='center' py={6} px={10}>
        <Input
          px={6}
          rounded={4}
          variant='outline'
          placeholder='Search'
        />

        <Flex   ml={4}>
          <Icon mx={4} as={SearchIcon} />
        </Flex>

        <IconButton
        
          isRound={true}
          variant='solid'
          colorScheme='teal'
          aria-label='Done'
          fontSize='20px'
          icon={<PhoneIcon />}
        />
      </Flex>
      <Flex py={6} px={10}>
        <Box px={6} py={4} color='#fff'>
          <Text fontWeight='bold'>300 LLC</Text>
        </Box>
        <Box px={6} py={4} color='#fff'>
          <Text fontWeight='bold'>Upload</Text>
        </Box>
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='teal'
          aria-label='Done'
          fontSize='20px'
          icon={<PhoneIcon />}
        />
        <IconButton
          isRound={true}
          variant='solid'
          colorScheme='teal'
          aria-label='Done'
          fontSize='20px'
          icon={ <Icon mx={4} as={SearchIcon} />}
        />
        
      </Flex>
    </Flex>
  );
};

export default Header;
