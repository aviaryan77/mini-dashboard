'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { ChakraProviders } from '@/components/theme';

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
      <body className='bg-gray-100 dark:bg-dark-400'>
        <StoreProvider>
          <ThemeProvider attribute='class'>
            <ChakraProviders>{children}</ChakraProviders>
          </ThemeProvider>
          <ToastContainer />
        </StoreProvider>
      </body>
    </html>
  );
}
