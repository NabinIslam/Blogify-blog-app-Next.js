'use client';

import BlogCard from '@/components/BlogCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    fetch('/api/v1/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  if (isloading) {
    return <LoadingSpinner />;
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
