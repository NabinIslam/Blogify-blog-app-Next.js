'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, FileInput, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useContext, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Loading from './loading';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-quill/dist/quill.snow.css';
import { useUser } from '@clerk/nextjs';

// const Editor = dynamic(
//   () => import('react-draft-wysiwyg').then(module => module.Editor),
//   { ssr: false }
// );

const PostBlogPage = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useUser();
  const { handleSubmit, reset, register } = useForm();
  const [loading, setLoading] = useState(false);
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState('');
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );

  // const onEditorStateChange = editorState => {
  //   setEditorState(editorState);
  // };

  const imgHostKey = process.env.NEXT_PUBLIC_imgBB_api_key;

  const handlePost = data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    // const content = convertToRaw(editorState.getCurrentInlineStyle());

    // console.log(content);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => {
        setLoading(true);
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
                setLoading(false);
              }
            });
        }
      });
  };

  if (loading) return <Loading />;

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

export default PostBlogPage;
