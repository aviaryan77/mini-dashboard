import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style

  // base style for the part
  field: {
    color: '#191C1F',
    transition: 'all 0.2s ease-in-out',

    _focus: {
      transform: 'scale(1.02)',
      borderColor: '#A6A6A6',
    },
    _blur: {
      transform: 'scale(1)',
    },
    _invalid: {
      boxShadow: '0 0 0 1px red.500',
      animation: 'shake 0.5s ease-in-out',
    },
  },
});

const baseTextInputStyle = defineStyle({
  border: '1px solid',
  color: '#191C1F',
  borderColor: '#D9D9D9',
  background: 'white',
  transition: 'all 0.2s ease-in-out',
  px: 4,
  rounded: 6,

  field: {
    color: 'secondary.500',
    border: '1px solid',
    borderColor: '#D9D9D9',
    background: 'gray.50',
    transition: 'all 0.2s ease-in-out',
  },

  _focus: {
    transform: 'scale(1.02)',
    borderColor: '#A6A6A6',
  },
  _blur: {
    transform: 'scale(1)',
  },
  _invalid: {
    borderColor: 'red.500',
    boxShadow: '0 0 0 1px red.500',
    animation: 'shake 0.5s ease-in-out',
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
export const textAreaTheme = defineMultiStyleConfig({
  baseStyle: baseTextInputStyle,
});
