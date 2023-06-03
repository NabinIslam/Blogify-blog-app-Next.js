'use client';

import { Button, Card } from 'flowbite-react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const BlogCard = ({ blog }) => {
  const { _id, title, content, author } = blog;

  return (
    <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {content.substring(0, 150) + '...'}
      </p>
      <p>
        <span className="font-bold">Posted by: </span>
        {author?.name}
      </p>
      <Link href={`/blog/${_id}`}>
        <Button color="gray">
          <p>Read more</p>
          <BsArrowRight className="ml-2" />
        </Button>
      </Link>
    </Card>
  );
};

export default BlogCard;
