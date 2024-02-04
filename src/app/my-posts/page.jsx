'use client';

import { useUser } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import { Button, Table } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import Loading from './loading';
import ConfirmDelete from '@/components/ConfirmDelete';
import EditPostModal from '@/components/EditPostModal';

const MyPostsPage = () => {
  const { user } = useUser();
  const [showPostEditModal, setShowPostEditModal] = useState(false);
  const [showPostDeleteModal, setShowPostDeleteModal] = useState(false);
  const [postId, setPostId] = useState(null);
  const {
    data: posts = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch(
        `https://blogify-blog-app-server-production.up.railway.app/api/posts/email/${user?.primaryEmailAddress?.emailAddress}`
      ).then(res => res.json()),
  });

  if (isFetching) return <Loading />;
  if (isLoading) return <Loading />;

  return (
    <main className="py-20">
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl mb-20">Your Posts</h1>
        {posts?.posts?.length === 0 ? (
          <h1 className="text-center">
            You have no post.{' '}
            <Link className="underline" href="/post-blog">
              Click here
            </Link>{' '}
            to post a blog.
          </h1>
        ) : (
          <Table>
            <Table.Head>
              <Table.HeadCell>Blog title</Table.HeadCell>
              <Table.HeadCell className="text-center">action</Table.HeadCell>
              <Table.HeadCell className="text-center">action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {posts?.posts?.map(({ title, _id, slug }) => (
                <Table.Row
                  key={_id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Link className="hover:underline" href={`/blog/${slug}`}>
                      {title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      className="mx-auto"
                      size="xs"
                      color="warning"
                      onClick={() => {
                        setPostId(_id);
                        setShowPostEditModal(true);
                      }}
                    >
                      Edit
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button
                      className="mx-auto"
                      color="failure"
                      size="xs"
                      onClick={() => {
                        setPostId(_id);
                        setShowPostDeleteModal(true);
                      }}
                    >
                      <p>Delete</p>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
      <EditPostModal
        showPostEditModal={showPostEditModal}
        setShowPostEditModal={setShowPostEditModal}
        postId={postId}
        refetch={refetch}
      />
      <ConfirmDelete
        showPostDeleteModal={showPostDeleteModal}
        setShowPostDeleteModal={setShowPostDeleteModal}
        postId={postId}
        refetch={refetch}
      />
    </main>
  );
};

export default MyPostsPage;
