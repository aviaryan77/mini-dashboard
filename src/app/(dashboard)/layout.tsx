'use client';
import { FC } from 'react';
import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';
import ProtectedRoute from '../ProtectedRoute';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}
const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-12 xl:px-20 2xl:px-48'>
      <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
        <Sidebar />
      </div>
      <ProtectedRoute>
        <AnimatePresence mode='wait'>
          <motion.main
            key={usePathname()} // Ensures animations are tied to unique routes
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.2, ease: 'linear' }}
            className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 lg:col-span-9 rounded-2xl shadow-custom-light dark:shadow-custom-dark  justify-center'
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </ProtectedRoute>
    </div>
  );
};

export default PageLayout;
