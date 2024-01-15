'use client';

import { useUser } from '@clerk/nextjs';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FileInput, Label, Select, TextInput } from 'flowbite-react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import slugify from 'slugify';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const PostBlog = () => {
  const { user } = useUser();
  const { handleSubmit, reset, register } = useForm();
  const [content, setContent] = useState('');
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch('https://blogify-r01e.onrender.com/api/categories').then(res =>
        res.json()
      ),
  });

  const imgHostKey = process.env.NEXT_PUBLIC_imgBB_api_key;

  const handlePost = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        return res.json();
      })
      .then(imgData => {
        if (imgData.success) {
          const post = {
            title: data.title,
            slug: slugify(data.title),
            content: content,
            image: imgData.data.url,
            category: data.category,
            author: {
              username: user?.username,
              email: user?.primaryEmailAddress.emailAddress,
              image: user?.imageUrl,
            },
          };

          console.log(post);

          fetch('https://blogify-r01e.onrender.com/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
          })
            .then(res => res.json())
            .then(result => {
              if (result.success) {
                reset();
                setContent('');
                toast.success('Post added successfully');
              }
            })
            .catch(error =>
              toast.error(
                `Could not post the article :( Something went wrong!!`
              )
            );
        }
      });
  };

  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-center font-bold text-4xl">
          What&apos;s on your mind?
        </h1>
        <form className="my-10" onSubmit={handleSubmit(handlePost)}>
          <div className="mb-5">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput {...register('title')} type="text" required />
          </div>
          <div className="mb-5 h-96" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <ReactQuill
              className="h-[300px] w-full block"
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </div>
          <div className="mb-5">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Category" />
            </div>
            <Select {...register('category')} required>
              {categories?.categories?.map(category => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="mb-2 block">
            <div className="mb-2 block">
              <Label htmlFor="uploadThumnail" value="Upload Thumbnail" />
            </div>
            <FileInput {...register('image')} required />
          </div>
          <Button gradientDuoTone="purpleToBlue" type="submit">
            Post
          </Button>
        </form>
      </div>
    </main>
  );
};

export default PostBlog;
