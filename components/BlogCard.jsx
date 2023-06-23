'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);

  const { _id, title, content, image } = blog;

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 ">
        <div className="relative h-56 max-w-full">
          <Link href={user ? `/blog/${_id}` : '/login'}>
            <Image
              className="rounded-t-lg max-w-full h-52"
              src={image}
              fill
              priority
              alt=""
            />
          </Link>
        </div>
        <div className="p-5">
          <Link href={user ? `/blog/${_id}` : '/login'}>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 hover:underline">
              {title}
            </h5>
          </Link>
          <p className="font-normal text-gray-700 mb-3">
            {content.substring(0, 100) + '...'}
          </p>
          <Link href={user ? `/blog/${_id}` : '/login'}>
            <Button color="gray">
              <p>Read more</p>
              <BsArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
