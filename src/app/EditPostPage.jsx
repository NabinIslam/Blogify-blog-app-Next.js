'use client';

import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Loading from './loading';
import { useQuery } from '@tanstack/react-query';

const EditPostPage = ({ id }) => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: post = [] } = useQuery({
    queryKey: ['post'],
    queryFn: () => fetch(`/api/v1/blogs/${id}`).then(res => res.json()),
  });

  const handleEditPost = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;

    const editedPost = { title, content };

    fetch(`/api/v1/blogs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(editedPost),
    })
      .then(res => {
        setLoading(true);
        return res.json();
      })
      .then(data => {
        if (data.acknowledged) {
          toast.success('Post updated successfully');
          navigate.push('/my-posts');
          setLoading(false);
        }
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-center font-bold text-4xl">Edit your post</h1>
        <form
          className="max-w-md mx-auto my-10"
          action=""
          onSubmit={handleEditPost}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              defaultValue={post.title}
              required
            />
          </div>
          <div className="max-w-md mb-5" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <Textarea
              id="content"
              name="content"
              rows={10}
              defaultValue={post.content}
              required
            />
          </div>
          <Button gradientDuoTone="purpleToBlue" type="submit">
            Update
          </Button>
        </form>
      </div>
    </main>
  );
};

export default EditPostPage;
