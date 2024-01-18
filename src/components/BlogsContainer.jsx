import { Suspense } from 'react';
import BlogCard from './BlogCard';
import Loading from '@/app/loading';

async function getPosts(sortBy = '', filterQuery = '') {
  const res = await fetch(
    `https://blogify-r01e.onrender.com/api/posts/?sort=${sortBy}&category=${filterQuery}`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

const BlogsContainer = async ({ sortBy, filterBy }) => {
  const data = await getPosts(sortBy, filterBy);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {data?.posts?.map(post => (
        <BlogCard key={post._id} post={post} />
      ))}
    </section>
  );
};

export default BlogsContainer;
