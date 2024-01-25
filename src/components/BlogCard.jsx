'use client';

import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import parse from 'html-react-parser';

const BlogCard = ({ post }) => {
  const { title, slug, content, image, category, author, createdAt } = post;

  const dateObject = new Date(createdAt);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const monthName = dateObject.toLocaleString('en-US', { month: 'long' });
  const day = dateObject.getDate();
  const formattedDate = `${monthName} ${day}, ${year}`;

  return (
    <div className="border p-2 rounded-xl flex flex-col justify-between shadow-sm">
      <div>
        <div className="relative h-52 max-w-full">
          <Link href={`/blog/${slug}`}>
            <Image
              className="rounded-lg max-w-full h-full"
              src={image}
              width={400}
              height={300}
              priority
              alt={slug}
            />
          </Link>
        </div>
        <h6 className="text-black mt-4 text-sm">
          <span className="font-bold">{category?.name}</span> -{' '}
          <span className="text-slate-500">{formattedDate}</span>
        </h6>
        <Link className="hover:underline" href={`/blog/${slug}`}>
          <h3 className="font-bold text-lg mt-1">{title}</h3>
        </Link>
      </div>

      <div className="flex items-center gap-2 mt-3">
        <Image
          className="rounded-full border"
          src={author?.image}
          height={40}
          width={40}
          alt={author?.username}
        />

        <div>
          <h6 className="text-sm font-bold leading-5 -mb-1">{author?.name}</h6>
          <h6 className="text-sm">Author</h6>
        </div>
      </div>
    </div>
    // <div className="bg-white min-h-[480px] shadow-xl border border-gray-200 rounded-lg max-w-sm mx-auto">
    //   <div className="relative h-56 max-w-full">
    //     <Link href={`/blog/${slug}`}>
    //       <Image
    //         className="rounded-t-lg max-w-full h-full"
    //         src={image}
    //         width={400}
    //         height={300}
    //         priority
    //         alt={slug}
    //       />
    //     </Link>
    //   </div>
    //   <div className="p-5">
    //     <Link href={`/blog/${slug}`}>
    //       <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 hover:underline">
    //         {title}
    //       </h5>
    //     </Link>
    //     <p className="font-normal text-gray-700 mb-3">
    //       {content.substring(0, 100) + '...'}
    //     </p>
    //     <Link href={`/blog/${slug}`}>
    //       <Button color="gray">
    //         <p>Read more</p>
    //         <BsArrowRight className="ml-2" />
    //       </Button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default BlogCard;
