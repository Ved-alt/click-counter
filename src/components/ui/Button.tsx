import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'default' | 'lg' | 'icon';
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all transform active:scale-95 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    outline: 'border border-gray-300 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    success: 'bg-green-500 hover:bg-green-600 text-white',
  };

  const sizes = {
    default: 'px-4 py-2 rounded-lg',
    lg: 'px-4 py-3 rounded-xl text-lg',
    icon: 'p-2 rounded-full',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}