'use client';

import { AuthContext } from '@/context/AuthContext';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { UserButton, auth, useClerk, useUser } from '@clerk/nextjs';

const Header = () => {
  // const { user } = useContext(AuthContext);
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <header className="shadow sticky top-0 z-50">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link
            className="hover:bg-slate-200 hover:duration-200 duration-100 p-2 rounded-lg"
            href="/"
          >
            <Image
              src="/logo.png"
              style={{ height: 'auto', width: 'auto' }}
              height={30}
              width={100}
              alt="Logo"
            />
          </Link>

          <div className="flex md:order-2">
            {user && (
              <>
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      className="mr-2 md:m-0"
                      alt={user?.fullName}
                      img={user?.imageUrl}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.fullName}</span>
                    <span className="block truncate text-sm font-medium">
                      {user?.primaryEmailAddress?.emailAddress}
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
                  <Dropdown.Item
                    onClick={() => signOut(() => router.push('/'))}
                  >
                    Sign out
                  </Dropdown.Item>
                </Dropdown>
              </>
            )}

            {!user && (
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
    </header>
  );
};

export default Header;
