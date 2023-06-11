'use client';

import BlogCard from '@/components/BlogCard';
import { useEffect, useState } from 'react';

// const getData = async () => {
//   const res = await fetch('/api/v1/blogs');

//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// };

const HomePage = () => {
  // const blogs = await getData();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/v1/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

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
