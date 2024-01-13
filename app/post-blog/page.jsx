'use client';
import { useUser } from '@clerk/nextjs';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FileInput, Label, TextInput } from 'flowbite-react';
import handlePost from '@/actions/handleAddPost';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

export const metadata = {
  title: 'Blogify | Post a blog',
};

const PostBlog = () => {
  const { user } = useUser();
  const { handleSubmit, reset, register } = useForm();
  const [content, setContent] = useState('');
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

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
            content: content,
            image: imgData.data.url,
            author: {
              username: user.username,
              email: user.primaryEmailAddress.emailAddress,
            },
          };

          fetch('/api/blogs', {
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
                setContent('');
                toast.success('Post added successfully');
              }
            });
        }
      });
  };

  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-center font-bold text-4xl">What's on your mind?</h1>
        <form
          className="max-w-md mx-auto my-10"
          onSubmit={handleSubmit(handlePost)}
        >
          <div className="mb-5">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput {...register('title')} type="text" required />
          </div>
          <div className="max-w-md mb-5 h-96" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="content" value="Content" />
            </div>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            {/* <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="h-60"
          editorClassName="border  px-4"
          onEditorStateChange={onEditorStateChange}
        /> */}
            {/* <Textarea {...register('content')} rows={10} required /> */}
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
