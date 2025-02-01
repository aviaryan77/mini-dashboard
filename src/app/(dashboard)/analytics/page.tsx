'use client';
import { Heading } from '@chakra-ui/react';
import SalesChart from './SalesChart';

function MyPage() {
  return (
    <div className='p-8'>
      <Heading className='text-xl font-bold text-gray-800 dark:text-gray-200 mb-6'>
        Sales Data for Last 7 Days
      </Heading>
      <SalesChart />
    </div>
  );
}

export default MyPage;
