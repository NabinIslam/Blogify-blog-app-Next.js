'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

const PostBlog = () => {
  const { user } = useContext(AuthContext);

  async function handlePost(event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;

    const post = {
      title,
      content,
      author: { name: user.displayName, email: user.email },
    };

    fetch('https://blogify-blog-mo3759n8a-nabinislam.vercel.app/api/v1/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(result => {
        if (result.status === 200) {
          form.reset();
          toast.success('Post added successfully');
        }
      });
  }

  return (
    <main>
      <div className="container mx-auto py-20">
        <h1 className="text-center font-bold text-4xl">What's on your mind?</h1>
        <form
          className="max-w-md mx-auto my-10"
          action=""
          onSubmit={handlePost}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" name="title" type="text" required />
          </div>
          <div className="max-w-md mb-5" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <Textarea id="content" name="content" rows={10} required />
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
