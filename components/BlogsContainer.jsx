import React from 'react';
import BlogCard from './BlogCard';

async function getBlogs(sortBy = '') {
  const res = await fetch(`/api/blogs/?sort=${sortBy}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BlogsContainer = async ({ sortBy }) => {
  const data = await getBlogs(sortBy);

  console.log(data);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data?.blogs?.map(blog => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </section>
  );
};

export default BlogsContainer;
