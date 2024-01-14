'use client';

import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

const BlogCard = ({ post }) => {
  const { title, slug, content, image } = post;

  return (
    <div className="bg-white min-h-[480px] shadow-xl border border-gray-200 rounded-lg max-w-sm mx-auto">
      <div className="relative h-56 max-w-full">
        <Link href={`/blog/${slug}`}>
          <Image
            className="rounded-t-lg max-w-full h-full"
            src={image}
            width={400}
            height={300}
            priority
            alt={slug}
          />
        </Link>
      </div>
      <div className="p-5">
        <Link href={`/blog/${slug}`}>
          <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 hover:underline">
            {title}
          </h5>
        </Link>
        <p className="font-normal text-gray-700 mb-3">
          {content.substring(0, 100) + '...'}
        </p>
        <Link href={`/blog/${slug}`}>
          <Button color="gray">
            <p>Read more</p>
            <BsArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
