'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Center, Heading } from '@chakra-ui/react';

// STATE MANAGEMENT
import ProtectedRoute from './ProtectedRoute';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/ReduxHook';

const Home = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((s) => s.auth) || {};
  const router = useRouter();

  useEffect(() => {
    accessToken? router.push('/dashboard'): router.push('/login');
  }, [router]);

  return (
    <ProtectedRoute>
      <Center
        w='full'
        h='100vh'
        textAlign='center'
        flexDir={'column'}
        fontSize='xl'
        p={8}
      >
        <Heading fontSize='24px'>Loading...</Heading>
      </Center>
    </ProtectedRoute>
  );
};

export default Home;
