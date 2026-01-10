import React from 'react';

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-gray-900 ${className || ''}`}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;