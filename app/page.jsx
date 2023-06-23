'use client';

import BlogCard from '@/components/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';
import FilterBlogs from '@/components/FilterBlogs';
import { useState } from 'react';

const HomePage = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => fetch('/api/v1/blogs').then(res => res.json()),
  });

  const [latest, setlatest] = useState(false);
  const [oldest, setOldest] = useState(false);

  let content = blogs.map(blog => <BlogCard key={blog._id} blog={blog} />);

  if (latest) {
    content = blogs
      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
      .map(blog => <BlogCard key={blog._id} blog={blog} />);
  } else if (oldest) {
    content = blogs
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map(blog => <BlogCard key={blog._id} blog={blog} />);
  } else {
    content = content = blogs.map(blog => (
      <BlogCard key={blog._id} blog={blog} />
    ));
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-5">
        <FilterBlogs setlatest={setlatest} setOldest={setOldest} />
        <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {content}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
