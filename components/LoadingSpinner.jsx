'use client';

import React from 'react';
import { Blocks } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Blocks />
    </div>
  );
};

export default LoadingSpinner;
