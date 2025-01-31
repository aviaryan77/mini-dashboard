`use client`;
import React, { useEffect, useState } from 'react';

import {
  Link,
  Box,
  Text,
  Flex,
  Avatar,
  Square,
  VStack,
  Tooltip,
  BoxProps,
  FlexProps,
  useDisclosure,
} from '@chakra-ui/react';
import { TEACHER_NAV } from './SIDEBAR_DATA';
import CreateTestButton from '../tests/CreateTestButton';

import NextLink from 'next/link';
import HelpModal from './HelpModal';
import DynamicLogo from './DynamicLogo';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import { Logo, QuestionIcon, FullLogo } from '@/assets/Icons';

// STATE MANAGEMENT
import { useDispatch, useSelector } from 'react-redux';
import { getOrganisation } from '@/store/actions';

import { RootState } from '@/types/Types';
import { motion } from 'framer-motion';
import Log from '@/helpers/Log';
import { CN_Link } from '../theme';

interface NavItemProps extends FlexProps {
  icon: any;
  path: string;
  label: string;
  isSidebarOpen?: boolean;
}
const NavItem = ({
  label,
  icon,
  isSidebarOpen,
  path,
  ...rest
}: NavItemProps) => {
  const pathname = usePathname();
  const isPathActive = pathname?.startsWith(path);
  return (
    <Link
      role='group'
      as={NextLink}
      href={path ?? '#'}
      _hover={{ textDecoration: 'none' }}
    >
      <Flex
        as={motion.div}
        align='center'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        py='4'
        px='8'
        bg={isPathActive ? 'brand.50' : 'white'}
        _hover={{
          bg: 'brand.50',
        }}
        _after={{
          content: '""',
          bg: 'brand.50',
          w: 42,
          h: 66,
          position: 'absolute',
          right: 0,
          clipPath: isSidebarOpen
            ? 'polygon(100% 0, 0 50%, 100% 100%)'
            : 'polygon(100% 0, 0 30%, 100% 100%)',
          display: isPathActive ? 'block' : 'none',
        }}
        {...rest}
      >
        <Tooltip
          hasArrow
          placement='right'
          label={`${label}`}
          bg='gray.100'
          color='black'
        >
          <Box mr={2}>{icon && icon}</Box>
        </Tooltip>

        {isSidebarOpen ? (
          <Text
            color='#5E6163'
            _hover={{
              bg: 'brand.50',
              color: 'text.secondary',
            }}
          >
            {label}
          </Text>
        ) : null}
      </Flex>
    </Link>
  );
};

interface SidebarProps extends BoxProps {
  onClose: () => void;
  onCloseSidebar?: () => void;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

const SidebarContent = ({
  onClose,
  isSidebarOpen,
  onCloseSidebar,
  onToggleSidebar,
  ...rest
}: SidebarProps) => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const isSettingsActive = pathname?.startsWith('/settings');

  const { organisationId, organisation } =
    useSelector((state: RootState) => state.auth) || {};

  const {
    isOpen: isHelpModalOpen,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure();

  useEffect(() => {
    organisationId &&
      !organisation?.name &&
      dispatch(
        getOrganisation({
          data: {
            organisationId: organisationId,
          },
          callback: (cb) => {},
        })
      );
  }, [organisationId, organisation]);

  return (
    <Flex
      direction='column'
      justifyContent='space-between'
      alignItems='flex-end'
      h='100vh'
      bg='white'
      position='relative'
      // w={{ base: 'full', md: 64 }}
      {...rest}
    >
      <>
        <Flex
          h='20'
          alignItems='center'
          justify='center'
          mx='8'
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {organisation?.logo ? (
            <DynamicLogo isSidebarOpen={isSidebarOpen} />
          ) : isSidebarOpen ? (
            <FullLogo h={'40px'} w={'162px'} />
          ) : (
            <Logo h={'45px'} w={'39px'} />
          )}
        </Flex>

        <Box mx='8' my={8} h={20}>
          {isSidebarOpen ? <CreateTestButton w='full' /> : null}
        </Box>
        <Box>
          {TEACHER_NAV?.map(({ id, name, path, icon }) => (
            <NavItem
              path={path}
              label={name}
              key={id}
              icon={icon}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </Box>
      </>

      <VStack pos='absolute' bottom={0} mt='auto' w='100%'>
        <Box bottom={10} width='100%' px='8'>
          {isSidebarOpen ? (
            <Flex
              px={10}
              py='2'
              mx={-8}
              bg={isSettingsActive ? '#F8F9FF' : 'white'}
              align='center'
              justify='space-between'
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                as={NextLink}
                color='#191C1F'
                href={`/settings/${organisation?._id}`}
                _hover={{
                  textDecoration: 'none',
                }}
              >
                <Flex align='center'>
                  <Avatar
                    size='sm'
                    name={organisation?.name || 'Qtopia'}
                    color={'brand.500'}
                    src={organisation?.logo}
                  />
                  <Text ml='4' fontWeight={500}>
                    Settings
                  </Text>
                </Flex>
              </Link>
            </Flex>
          ) : (
            <Flex py='2' rounded='6' align='center' justify={'center'}>
              <Link
                as={NextLink}
                color='brand.500'
                href={`/settings/${organisation?._id}`}
                _hover={{ textDecoration: 'none' }}
              >
                <Tooltip
                  hasArrow
                  placement='right'
                  label={`Settings`}
                  bg='gray.100'
                  color='black'
                >
                  <Flex align='center' justify={'center'}>
                    <Avatar
                      size='sm'
                      name={organisation?.name ?? 'Qtopia'}
                      src={organisation?.logo}
                    />
                  </Flex>
                </Tooltip>
              </Link>
            </Flex>
          )}
          {isSidebarOpen ? (
            <Flex
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              px='2'
              mt='2'
              align='center'
              justify='space-between'
            >
              <Flex as='button' align='center' onClick={onOpenHelpModal}>
                <QuestionIcon color='greyIcon' fontSize={'x-large'} />
                <Text ml='1' color='#5E6163'>
                  Help
                </Text>
              </Flex>
              <Square
                rounded='4'
                border='1px solid lightgray'
                p='1'
                size='6'
                bg='white'
                onClick={onCloseSidebar}
              >
                <ChevronLeftIcon h={5} w={5} />
              </Square>
            </Flex>
          ) : (
            <Flex justify={'center'}>
              <Square
                mt={2}
                rounded='4'
                size='6'
                border='1px solid lightgray'
                p='1'
                bg='white'
                onClick={onToggleSidebar}
              >
                <ChevronRightIcon h={5} w={5} />
              </Square>
            </Flex>
          )}
        </Box>

        <Box w='100%' px={2} mt={2} py={4} borderTop={'.5px solid lightgray'}>
          {isSidebarOpen ? (
            <Flex
              px={2}
              w='100%'
              as='span'
              align='center'
              justify={'center'}
              fontSize={'.8rem'}
            >
              Powered by <FullLogo ml={2} h={'20px'} w={'82px'} />
            </Flex>
          ) : (
            <Flex
              px={2}
              w='100%'
              align='center'
              justify={'center'}
              fontSize={'.8rem'}
            >
              <Logo ml={2} h={'20px'} w={'82px'} />
            </Flex>
          )}
        </Box>
      </VStack>
      <HelpModal isOpen={isHelpModalOpen} onClose={onCloseHelpModal} />
    </Flex>
  );
};

export default SidebarContent;
