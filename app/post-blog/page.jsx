'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, FileInput, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const { handleSubmit, reset, register } = useForm();

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
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          const post = {
            title: data.title,
            content: data.content,
            image: imgData.data.url,
            author: { name: user.displayName, email: user.email },
          };

          fetch('/api/v1/blogs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
          })
            .then(res => res.json())
            .then(result => {
              if (result.status === 200) {
                reset();
                toast.success('Post added successfully');
              }
            });
        }
      });
  };

  return (
    <main>
      <div className="container mx-auto py-20">
        <h1 className="text-center font-bold text-4xl">What's on your mind?</h1>
        <form
          className="max-w-md mx-auto my-10"
          action=""
          onSubmit={handleSubmit(handlePost)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput {...register('title')} type="text" required />
          </div>
          <div className="max-w-md mb-5" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <Textarea {...register('content')} rows={10} required />
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
