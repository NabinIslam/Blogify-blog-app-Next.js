'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const BlogCard = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorite] = useState(false);

  const { _id, title, content, image } = blog;

  const favBlog = {
    title,
    content,
    image,
    user: { name: user?.name, email: user?.email },
  };

  const handleAddToFav = () => {
    fetch('/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(favBlog),
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === 200) {
          toast.success('Post added to favorites successfully');
          setFavorite(true);
        }
      });
  };

  return (
    <div className="bg-white min-h-[480px] shadow-xl border border-gray-200 rounded-lg max-w-sm mx-auto">
      <div className="relative h-56 max-w-full">
        <Link href={user ? `/blog/${_id}` : '/login'}>
          <Image
            className="rounded-t-lg max-w-full h-52 "
            src={image}
            fill
            priority
            alt=""
          />
        </Link>
        {user && (
          <button
            className="absolute bg-white right-0 m-2 p-1 rounded-full cursor-pointer shadow-xl"
            onClick={() => handleAddToFav()}
          >
            {favorite ? (
              <AiFillHeart className="text-xl" />
            ) : (
              <AiOutlineHeart className="text-xl" />
            )}
          </button>
        )}
      </div>
      <div className="p-5">
        <Link href={user ? `/blog/${_id}` : '/login'}>
          <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 hover:underline">
            {title}
          </h5>
        </Link>
        <p className="font-normal text-gray-700 mb-3">
          {content.substring(0, 100) + '...'}
        </p>
        <Link href={`/blog/${_id}`}>
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
