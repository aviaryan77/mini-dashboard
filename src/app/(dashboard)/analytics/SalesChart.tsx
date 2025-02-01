'use client';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import {
  Title,
  Legend,
  Tooltip,
  BarElement,
  LinearScale,
  CategoryScale,
  Chart as ChartJS,
} from 'chart.js';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesChart = () => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = 'teal';

  // Mock sales data for the last 7 days
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [120, 250, 180, 300, 220, 400, 320], // Mock sales data
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: textColor, // Adapt text color to theme
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
        },
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: useColorModeValue(
            'rgba(0, 0, 0, 0.1)',
            'rgba(255, 255, 255, 0.1)'
          ),
        },
      },
    },
  };

  return (
    <Box className='p-4 rounded-lg shadow-lg' bg={'bgColor'}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default SalesChart;
