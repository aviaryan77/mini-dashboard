import React from 'react';
import { useTheme } from 'next-themes';

import { Avatar, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { CN_Link } from './theme';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const onLogout = () => {
    //
  };

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div>
      <div className='items-center justify-center w-32 h-32 mx-auto overflow-hidden rounded-full'>
        <Avatar
          src='/images/profile.jpg'
          size='xl'
          className='w-32 h-32 mx-auto overflow-hidden rounded-full'
        />
      </div>

      <VStack minH='64vh'>
        <CN_Link
          href='/app'
          className='w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 justify-center'
        >
          Home
        </CN_Link>
        <CN_Link
          href='/dashboard'
          className='w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 justify-center'
        >
          Analytics
        </CN_Link>
        <CN_Link
          href='/profile'
          className='w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400 justify-center'
        >
          Profile
        </CN_Link>

        <button
          onClick={changeTheme}
          className='w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-r from-green-400 to-blue-400'
        >
          Toggle Theme
        </button>
        <button
          onClick={onLogout}
          className='w-8/12 px-5 py-2 my-3 rounded-full bg-gradient-to-t from-red-100 to-red-400'
        >
          Logout
        </button>
      </VStack>
    </div>
  );
};

export default Sidebar;
