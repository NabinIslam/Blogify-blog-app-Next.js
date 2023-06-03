'use client';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';

const EditPost = () => {
  return (
    <main>
      <div className="container mx-auto py-20">
        <h1 className="text-center font-bold text-4xl">What's on your mind?</h1>
        <form className="max-w-md mx-auto my-10" action="" onSubmit={() => {}}>
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
            <Textarea id="content" name="content" rows={6} required />
          </div>
          <Button type="submit">Post</Button>
        </form>
      </div>
    </main>
  );
};

export default EditPost;
