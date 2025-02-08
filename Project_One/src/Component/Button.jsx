// import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="px-6 py-3 border-[4px] uppercase border-black hover:bg-[black] hover:text-white">
      {children}
    </button>
  );
};

export default Button;
