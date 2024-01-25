'use client';

import EditPostFormSkeleton from '@/skeletons/EditPostFormSkeleton';
import { useQuery } from '@tanstack/react-query';
import {
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  TextInput,
} from 'flowbite-react';
import dynamic from 'next/dynamic';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';

const EditPostModal = ({
  showPostEditModal,
  setShowPostEditModal,
  postId,
  refetch,
}) => {
  const { handleSubmit, reset, register } = useForm();
  const [content, setContent] = useState('');
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    []
  );
  const {
    data: post = [],
    isLoading: isPostLoading,
    isFetching: isPostFetching,
  } = useQuery({
    queryKey: ['post'],
    queryFn: () =>
      fetch(`https://blogify-r01e.onrender.com/api/posts/${postId}`).then(res =>
        res.json()
      ),
  });

  const {
    data: categories = [],
    isLoading: isCategoriesLoading,
    isFetching: isCategoriesFetching,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch('https://blogify-r01e.onrender.com/api/categories').then(res =>
        res.json()
      ),
  });
  console.log(post);
  console.log(categories);

  return (
    <Modal show={showPostEditModal} onClose={() => setShowPostEditModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        {isPostLoading ||
        isCategoriesLoading ||
        isPostFetching ||
        isCategoriesFetching ? (
          <EditPostFormSkeleton />
        ) : (
          <form className="my-10" onSubmit={handleSubmit(() => {})}>
            <div className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                {...register('title')}
                type="text"
                defaultValue={post?.post?.title}
                required
              />
            </div>
            <div className="mb-5 h-96" id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="content" value="Content" />
              </div>
              <ReactQuill
                className="h-[300px] w-full block"
                theme="snow"
                defaultValue={post?.post?.content}
                value={content}
                onChange={setContent}
              />
            </div>
            <div className="mb-5">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" required />
              </div>
              <Select {...register('category')}>
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
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShowPostEditModal(false)}>I accept</Button>
        <Button color="gray" onClick={() => setShowPostEditModal(false)}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPostModal;
