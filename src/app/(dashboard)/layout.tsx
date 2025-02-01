'use client';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import { Heading } from '@chakra-ui/react';
import { FC } from 'react';
import ProtectedRoute from '../ProtectedRoute';

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-12 xl:px-20 2xl:px-48'>
      <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
        <Sidebar />
      </div>
      <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark  justify-center'>
        <ProtectedRoute>{children}</ProtectedRoute>
      </div>
    </div>
  );
};

export default PageLayout;
