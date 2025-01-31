import { defineStyleConfig } from '@chakra-ui/react';


export const TextVariants = defineStyleConfig({
  // Base styles that can be shared across variants
  baseStyle: { 
    // Add any common styles here (e.g., font-family)
    // fontFamily: 'Roboto',
    
  },
  // Define your variants
  variants: {
    title: {
      fontSize: '1rem', 
      fontWeight: 'semibold',
      color: 'text.secondary',
      className: 'text-black dark:text-white'
    },
    description: {
      fontSize: 'md', 
      color: 'text.primary',
      className: 'text-black dark:text-white'
      // ... more description-specific styles
    },
    formHeader: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: 'text.primary', // #5E6163
      className: 'text-black dark:text-white'
    },
    formLabel: {
      fontSize: '1rem',
      fontWeight: 400,
      // color: 'text.primary', // #5E6163
      color: 'black dark:white'
    },
    pageHeader: {
      fontSize:'xl', fontWeight:'semibold',
      className: 'text-black dark:text-white'
    }
  },
});


