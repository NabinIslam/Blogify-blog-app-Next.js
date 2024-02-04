'use client';

import { Suspense, useState } from 'react';
import FilterBlogs from '@/components/FilterBlogs';
import BlogsContainer from '@/components/BlogsContainer';
import HeroSection from '@/components/HeroSection';
import HomePostsSkeleton from './loading';

const HomePage = () => {
  const [sortBy, setSortBy] = useState('');
  const [filterBy, setFilterBy] = useState('');

  return (
    <main className="">
      <HeroSection />
      <div className="container mx-auto px-5 py-10">
        <FilterBlogs setSortBy={setSortBy} setFilterBy={setFilterBy} />
        <Suspense fallback={<HomePostsSkeleton />}>
          <BlogsContainer sortBy={sortBy} filterBy={filterBy} />
        </Suspense>
      </div>
    </main>
  );
};

export default HomePage;
