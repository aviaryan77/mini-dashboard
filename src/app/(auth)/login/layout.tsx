'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/ReduxHook';

const layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { accessToken } = useAppSelector((s) => s.auth) || {};

  return <>{children}</>;
};

export default layout;
