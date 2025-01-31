// components/CustomSpinner.tsx
import React from 'react';
import { Box, Center, StyleProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';

interface CustomSpinnerProps extends StyleProps {}
const CustomSpinner: React.FC<CustomSpinnerProps> = ({...rest}) => {
  return (
    <Center position="relative" top="0" left="0" width="100%" height="100%" backgroundColor="rgba(255, 255, 255, 0.8)" zIndex="9999" {...rest}>
      <Box>
        <motion.div
          animate={{ x: [0, 12, 0],
            opacity: [0, 0.5, 0]
           }}
          transition={{ ease: "circIn", duration: 2, repeat: Infinity }}
        >
          <ArrowForwardIcon boxSize={8} />
        </motion.div>
      </Box>
    </Center>
  );
};

export default CustomSpinner;
