'use client';
import React, { useEffect, useState } from 'react';

import EmailForm from './EmailForm';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/store/ReduxHook';
import { getProfile } from '@/store/actions';

function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isOtpVisible, setIsOtpVisible] = useState<boolean>(false);

  const { accessToken } = useAppSelector((s) => s.auth) || {};

  useEffect(() => {
    if (accessToken) {
      dispatch(
        getProfile({
          callback: (cb: any) => {
            router.push('/');
          },
        })
      );
    }
  }, [accessToken]);

  return <EmailForm visible={true} setIsOtpVisible={setIsOtpVisible} />;
}

export default LoginPage;
