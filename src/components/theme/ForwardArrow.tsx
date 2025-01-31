import React from "react";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

const ForwardArrow: React.FC = () => {
  return (
    <Flex align="center">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: [0, 10, 20, 20, 0], // Adds a pause at the end
          opacity: [0, 0.5, 1, 1, 0], // Matches the pause with opacity
        }}
        transition={{
          duration: 2, // Total animation time
          ease: [0.42, 0, 0.58, 1], // Custom ease: slow start, fast end
          times: [0, 0.3, 0.6, 0.8, 1], // Adjust timing of keyframes
          repeat: Infinity, // Infinite loop
        }}
        style={{ display: "flex", alignItems: "center" }}
      >
        <Box
          as="span"
          fontSize="24px"
          fontWeight="bold"
          style={{
            fontFamily: "Arial, sans-serif",
            display: "inline-block",
          }}
        >
          →
        </Box>
      </motion.div>
    </Flex>
  );
};

export default ForwardArrow;