import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text = 'Loading...' }) => {
  const circleVariants = {
    initial: {
      scale: 0.8,
      opacity: 0.5,
    },
    animate: {
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
        repeat: Infinity,
        duration: 1.5,
      },
    },
  };

  const colors = [
    'bg-saffron-500',
    'bg-gold-500',
    'bg-maroon-700',
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full p-6">
      <motion.div
        className="flex space-x-3 mb-4"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className={`w-4 h-4 rounded-full ${color}`}
            variants={circleVariants}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
      <div className="font-medium text-maroon-700">{text}</div>
    </div>
  );
};

export default Loader;