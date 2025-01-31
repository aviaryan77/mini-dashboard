import { extendTheme } from '@chakra-ui/react';
import { fonts } from './fonts';
import { colors } from './COLORS';
import { TextVariants } from './TextVariants';
import { inputTheme, textAreaTheme } from './InputTheme';
import { mode } from '@chakra-ui/theme-tools';

export const theme = extendTheme({
  components: {
    Text: TextVariants,
    Button: {
      baseStyle: {
        // Customize your base button styles here
        fontWeight: 500, // Example: Make all buttons bold
        borderRadius: '8px', // Example: Medium border radius for all buttons
      },
      variants: {
        shadow: {
          bg: 'brand.500',
          boxShadow: '-3px -3px 0px 0px #00000040 inset',

          color: 'white',
          _hover: {
            bg: 'brand.300',
          },
          _active: {
            bg: 'brand.300',
          },
          _disabled: {
            bg: '#595959',
            color: 'white',
            boxShadow: '-3px -3px 0px 0px #00000090 inset',
          },

        },
      },

      // Optionally, you can also define default props and variants
      defaultProps: {
        variant: 'solid', // Example: Default variant for all buttons
        colorScheme: '2nd', // Example: Default color scheme for all buttons
      },
    },
    Input: {
      focusVisible: {
        outline: 'none',
      },
      defaultProps: {
        variant: 'outline',
        focusBorderColor: 'blackAlpha.300',
        borderColor: 'green.300',
        outlineColor: 'green.300',
      },
      variants: {
        outline: (props: any) => ({
          field: {
            borderWidth: 1,
            borderColor: '#D9D9D9',
            _focus: {
              borderWidth: 1,
            },
            _invalid: {
              borderColor: mode('red.500', 'red.300')(props),
              boxShadow: `0 0 0 1px ${mode('red.500', 'red.300')(props)}`,
            },
          },
        }),
      },
      ...inputTheme,
    },
    Textarea: {
      variants: {
        outline: (props: any) => ({
          field: {
            _focus: {
              borderColor: mode('secondary.500', 'secondary.300')(props),
              boxShadow: `0 0 0 1px ${mode(
                'secondary.500',
                'secondary.300'
              )(props)}`,
            },
            _invalid: {
              borderColor: mode('red.500', 'red.300')(props),
              boxShadow: `0 0 0 1px ${mode('red.500', 'red.300')(props)}`,
            },
          },
        }),
      },
      ...textAreaTheme,
    },
  },

  keyframes: {
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
    },
  },
  fonts: fonts,
  colors: colors,
  breakpoints: {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  },
});
