import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  icon
}) => {
  const baseStyle = 'flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantStyles = {
    primary: 'bg-saffron-500 text-white hover:bg-saffron-600 focus:ring-saffron-300 shadow-md',
    secondary: 'bg-gold-500 text-maroon-800 hover:bg-gold-600 focus:ring-gold-300 shadow-md',
    accent: 'bg-maroon-700 text-white hover:bg-maroon-800 focus:ring-maroon-500 shadow-md',
    outline: 'bg-transparent border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 focus:ring-saffron-200'
  };
  
  const disabledStyle = 'opacity-50 cursor-not-allowed';
  
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${disabled ? disabledStyle : ''} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;