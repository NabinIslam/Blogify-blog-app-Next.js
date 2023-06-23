'use client';

import Loading from '@/app/loading';
import { useQuery } from '@tanstack/react-query';

const BlogDetail = ({ params }) => {
  const { data: singleBlog = [], isLoading } = useQuery({
    queryKey: ['singleBlog'],
    queryFn: () => fetch(`/api/v1/blogs/${params.id}`).then(res => res.json()),
  });

  const { title, author, content } = singleBlog;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="container mx-auto py-10 px-5">
        <h1 className="font-bold text-4xl mb-5">{title}</h1>
        <p className="mb-5">
          <span className="font-bold">Written by: </span>
          {author?.name}
        </p>
        <p>{content}</p>
      </div>
    </main>
  );
};

export default BlogDetail;
