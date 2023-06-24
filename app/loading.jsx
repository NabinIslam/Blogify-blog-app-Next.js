'use client';

import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Dna />
    </div>
  );
};

export default Loading;
