'use client';
import React from 'react';
import { HomeIcon, TestIcon,PinIcon, BatchesIcon } from '@/assets/Icons';

export const TEACHER_NAV = [
  //3 Home, Discover, Trending
  // {
  //   id: 'home',
  //   name: 'Home',
  //   path: '/',
  //   icon: (
  //     <HomeIcon
  //       color='#A6A6A6'
  //       height={5}
  //       width={5}
  //       _groupHover={{ color: 'brand.500' }}
  //     />
  //   ),
  // },
  {
    id: 'Tests',
    name: 'Tests',
    path: '/tests',
    // icon: TestIcon,
    icon: (
      <TestIcon
        color='#A6A6A6'
        height={5}
        width={5}
        _groupHover={{ color: 'brand.500' }}
      />
    ),
  },
  {
    id: 'batches',
    name: 'Batches',
    path: '/batches',
    icon: (
      <BatchesIcon
        color='#A6A6A6'
        height={5}
        width={5}
        _groupHover={{ color: 'brand.500' }}
      />
    ),
  },
  {
    id: 'noticeBoard',
    name: 'NoticeBoard',
    path: '/notice-board',
    icon: (
      <PinIcon
        color='#A6A6A6'
        height={5}
        width={5}
        _groupHover={{ color: 'brand.500' }}
      />
    ),
  }
];
