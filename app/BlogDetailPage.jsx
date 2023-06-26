'use client';

import Loading from '@/app/loading';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

const BlogDetailPage = ({ params }) => {
  const {
    data: singleBlog = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['singleBlog'],
    queryFn: () => fetch(`/api/v1/blogs/${params.id}`).then(res => res.json()),
  });

  const { title, author, content, image } = singleBlog;

  if (isFetching) {
    return <Loading />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="container mx-auto py-10 px-5">
        <div className="relative max-w-full h-auto mb-10">
          <Image
            src={image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto shadow-2xl rounded-2xl"
          />
        </div>
        <h1 className="font-bold text-2xl lg:text-4xl mb-5">{title}</h1>
        <p className="mb-5">
          <span className="font-bold">Written by: </span>
          {author?.name}
        </p>
        <p>{content}</p>
      </div>
    </main>
  );
};

export default BlogDetailPage;
