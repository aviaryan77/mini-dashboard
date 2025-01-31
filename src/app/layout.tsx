'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { ChakraProviders } from '@/components/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

// STORE
import { ToastContainer } from '@/helpers/Toast';
import StoreProvider from './StoreProvider';
import { fonts } from '@/components/theme/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={fonts.roboto.className} suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        // className={fonts.roboto.className}
        className='bg-gray-100 dark:bg-dark-400'
      >
        <StoreProvider>
          <ThemeProvider attribute='class'>
            <ChakraProviders>
              <AnimatePresence mode='wait'>
                <motion.main
                  key={usePathname()} // Ensures animations are tied to unique routes
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.main>
              </AnimatePresence>
            </ChakraProviders>
          </ThemeProvider>
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
