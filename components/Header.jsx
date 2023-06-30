'use client';

import { AuthContext } from '@/context/AuthContext';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ConfirmLogout from './ConfirmLogout';

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link
            className="hover:bg-slate-200 hover:duration-200 duration-100 p-2 rounded-lg"
            href="/"
          >
            <Image src="/logo.png" height={30} width={100} alt="Logo" />
          </Link>

          <div className="flex md:order-2">
            {user ? (
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    className="mr-2 md:m-0"
                    alt={user?.displayName}
                    img={user?.photoURL}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Link href="/profile">
                  <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Link href="/post-blog">
                  <Dropdown.Item>Post</Dropdown.Item>
                </Link>
                <Link href="/my-posts">
                  <Dropdown.Item>My Posts</Dropdown.Item>
                </Link>
                <Link href="/favorites">
                  <Dropdown.Item>Favorites</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setShowModal(true)}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            ) : (
              <Link href={'/login'}>
                <Button gradientDuoTone="purpleToBlue" size="sm">
                  Login
                </Button>
              </Link>
            )}
            {/* <Navbar.Toggle /> */}
          </div>
          {/* <Navbar.Collapse>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </Navbar.Collapse> */}
        </Navbar>
      </div>
      <ConfirmLogout
        showModal={showModal}
        setShowModal={setShowModal}
        router={router}
      />
    </header>
  );
};

export default Header;
