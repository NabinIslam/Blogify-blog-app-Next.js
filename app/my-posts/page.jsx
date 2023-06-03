'use client';

import ConfirmDelete from '@/components/ConfirmDelete';
import { AuthContext } from '@/context/AuthContext';
import { Table } from 'flowbite-react';
import Link from 'next/link';
import { useContext, useState } from 'react';

const getData = async email => {
  const res = await fetch(`http://localhost:3000/api/v1/blogs/email/${email}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const MyPosts = async () => {
  const [showModal, setShowModal] = useState(false);

  const { user } = useContext(AuthContext);

  const usersBlogs = await getData(user?.email);

  return (
    <main className="py-10 ">
      <div className="container mx-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Blog title</Table.HeadCell>
            <Table.HeadCell>action</Table.HeadCell>
            <Table.HeadCell>action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {usersBlogs.map(({ title, _id, content }) => (
              <Table.Row
                key={_id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <Link className="hover:underline" href={`/blog/${_id}`}>
                    {title}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    href="/edit-post"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                  >
                    <p>Edit</p>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <a
                    onClick={() => setShowModal(true)}
                    className="font-medium text-red-600 hover:underline dark:text-cyan-500 cursor-pointer"
                  >
                    <p>Delete</p>
                  </a>
                </Table.Cell>
                <ConfirmDelete
                  showModal={showModal}
                  setShowModal={setShowModal}
                  id={_id}
                />
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </main>
  );
};

export default MyPosts;
