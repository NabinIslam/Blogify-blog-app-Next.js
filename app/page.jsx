'use client';

import BlogCard from '@/components/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';
// import { useEffect, useState } from 'react';

const HomePage = () => {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetch('/api/v1/blogs')
  //     .then(res => res.json())
  //     .then(data => setBlogs(data));
  // }, []);

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => fetch('/api/v1/blogs').then(res => res.json()),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="py-20">
      <div className="container mx-auto px-5">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
