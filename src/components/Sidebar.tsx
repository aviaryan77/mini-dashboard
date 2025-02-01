import React from 'react';
import { useTheme } from 'next-themes';

import { CN_Link } from './theme';
import { logout } from '@/store/actions';
import { clearStore } from '@/store/reducers';
import { SIDEBAR_DATA } from './SIDEBAR_DATA';
import { Avatar, VStack } from '@chakra-ui/react';
import { useAppDispatch } from '@/store/ReduxHook';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(
      logout({
        callback: () => {
          dispatch(clearStore());
        },
      })
    );
  };

  const changeTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return (
    <div>
      <div className='items-center justify-center w-32 h-32 mx-auto overflow-hidden rounded-full'>
        <Avatar
          size='xl'
          className='w-32 h-32 mx-auto overflow-hidden rounded-full'
        />
      </div>

      <VStack minH={['auto', 'auto', '64vh', '64vh']}>
        {SIDEBAR_DATA?.map((nav) => {
          return (
            <CN_Link
              key={nav.title}
              href={nav.href}
              className='w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 justify-center'
            >
              {nav.title}
            </CN_Link>
          );
        })}

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
