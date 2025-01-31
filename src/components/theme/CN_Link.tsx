'use client';
import {
  Link,
  LinkProps as ChakraLinkProps,
  Spinner,
  Button,
  Box,
  Flex,
} from '@chakra-ui/react';
import NextLink, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import CustomSpinner from './CustomSpinner';
import { motion } from 'framer-motion';
import ForwardArrow from './ForwardArrow';

interface CN_LinkProps extends Omit<LinkProps, 'as'>, ChakraLinkProps {
  href: string;
  hasLoader?: boolean;
  hasArrow?: boolean;
}

export const CN_Link: React.FC<CN_LinkProps> = ({
  href,
  children,
  hasLoader = false,
  hasArrow = false,
  ...rest
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <Link
      as={NextLink}
      // color='brand.500'
      href={href}
      onClick={handleClick}
      flexDir={'row'}
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
        {children}
        {hasLoader && loading ? <Spinner size='sm' ml={4} /> : null}
        {hasArrow  && loading? <ForwardArrow /> : null}
    </Link>
  );
};
