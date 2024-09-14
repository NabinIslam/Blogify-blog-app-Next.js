"use client";

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";

const BlogCard = ({ post }) => {
  const { title, slug, image, category, author, createdAt } = post;

  return (
    <div className="flex flex-col justify-between rounded-xl border p-2 shadow-sm">
      <div>
        <div className="relative h-52 max-w-full">
          <Link href={`/blog/${slug}`}>
            <Image
              className="h-full max-w-full rounded-lg"
              src={image}
              width={400}
              height={300}
              priority
              alt={slug}
            />
          </Link>
        </div>
        <h6 className="mt-4 text-sm text-black">
          <span className="font-bold">{category?.name}</span> -
          <span className="text-slate-500">{formatDate(createdAt)}</span>
        </h6>
        <Link className="hover:underline" href={`/blog/${slug}`}>
          <h3 className="mt-1 text-lg font-bold">{title}</h3>
        </Link>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <Image
          className="rounded-full border"
          src={author?.image}
          height={40}
          width={40}
          alt={author?.username}
        />

        <div>
          <h6 className="-mb-1 text-sm font-bold leading-5">{author?.name}</h6>
          <h6 className="text-sm">Author</h6>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
