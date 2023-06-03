'use client';

import BlogCard from '@/components/BlogCard';
import React, { useEffect, useState } from 'react';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/v1/blogs');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const HomePage = async () => {
  const blogs = await getData();

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
