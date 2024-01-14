'use client';

import { useState } from 'react';

import FilterBlogs from '@/components/FilterBlogs';
import BlogsContainer from '@/components/BlogsContainer';

const HomePage = () => {
  const [sortBy, setSortBy] = useState('');

  return (
    <main className="py-20">
      <div className="container mx-auto px-5">
        <FilterBlogs setSortBy={setSortBy} />
        <BlogsContainer sortBy={sortBy} />
      </div>
    </main>
  );
};

export default HomePage;
