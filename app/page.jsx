'use client';

import BlogCard from '@/components/BlogCard';
import { useQuery } from '@tanstack/react-query';
import Loading from './loading';

const HomePage = () => {
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
        <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default HomePage;
