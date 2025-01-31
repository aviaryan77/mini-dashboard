'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function FramerPage({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ width: '100%', height: '100%' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
