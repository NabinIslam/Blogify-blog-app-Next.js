'use client';

import BlogCard from '@/components/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';
import FilterBlogs from '@/components/FilterBlogs';
import { useState } from 'react';
import BlogsContainer from '@/components/BlogsContainer';

const HomePage = () => {
  const [sortBy, setSortBy] = useState('');
  // const {
  //   data: blogs = [],
  //   isLoading,
  //   isFetching,
  // } = useQuery({
  //   queryKey: ['blogs'],
  //   queryFn: () => fetch('/api/blogs').then(res => res.json()),
  // });

  // const [latest, setlatest] = useState(false);
  // const [oldest, setOldest] = useState(false);

  // let content = blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />);

  // latest
  //   ? (content = blogs
  //       ?.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  //       .map(blog => <BlogCard key={blog._id} blog={blog} />))
  //   : latest;

  // oldest
  //   ? (content = blogs
  //       ?.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
  //       .map(blog => <BlogCard key={blog._id} blog={blog} />))
  //   : oldest;

  // if (isLoading) return <Loading />;
  // if (isFetching) return <Loading />;

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
