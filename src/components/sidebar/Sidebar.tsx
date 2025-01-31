'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Drawer,
  FlexProps,
  IconButton,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';

import SidebarContent from './SidebarContent';
import { HamburgerIcon, Logo } from '@/assets/Icons';
import { useRouter, usePathname } from 'next/navigation';
import Log from '@/helpers/Log';

export default function SimpleSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [closedDeliberately, setClosedDeliberately] = useState(false);

  const onToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setClosedDeliberately(true);
  };

  useEffect(() => {
    if (pathname.includes('/create-test') && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else if (pathname.includes('/tests/') && isSidebarOpen) {
      setIsSidebarOpen(false);
    } else if (!isSidebarOpen && !closedDeliberately) {
      setIsSidebarOpen(true);
    }
  }, [pathname]);

  return (
    <>
      <Box
        h='100vh'
        bg='White'
        // pos="sticky"
        width={isSidebarOpen ? 'auto' : '80px'}
        overflow={'hidden'}
        transition={'all 0.3s ease'}
        // transform={isSidebarOpen ? 'translateX(20%)' : 'translateX(0%)'}
        //  display={isSidebarOpen ? 'block' : 'none'}
      >
        <Box>
          <SidebarContent
            isSidebarOpen={isSidebarOpen}
            onClose={() => onClose}
            onCloseSidebar={onToggleSidebar}
            display={{ base: 'none', md: 'block' }} // Desktop Sidebar
            onToggleSidebar={onToggleSidebar}
          />
        </Box>

        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size='full'
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} isSidebarOpen={isSidebarOpen} />
          </DrawerContent>
        </Drawer>
        {/* mobile nav */}
        <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p='4'>
          {/* Content */}
        </Box>
      </Box>
    </>
  );
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const router = useRouter();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent='flex-start'
      {...rest}
    >
      <IconButton
        variant='outline'
        onClick={onOpen}
        aria-label='open menu'
        icon={<HamburgerIcon />}
      />

      <Logo h='60px' w='52px' onClick={() => router.push('/')} />
    </Flex>
  );
};
