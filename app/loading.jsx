'use client';

import React from 'react';
import { Blocks } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Blocks />
    </div>
  );
};

export default Loading;
