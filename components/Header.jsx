'use client';

import { AuthContext } from '@/context/AuthContext';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import React, { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import app from '@/firebase/firebase.config';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

const Header = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const auth = getAuth(app);

  return (
    <div className="shadow">
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
                    alt={user.displayName}
                    img={user.photoURL}
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
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
                  onClick={() => {
                    signOut(auth)
                      .then(() => {
                        router.push('/login');
                        toast('Logout successful 🎉');
                      })
                      .catch(error => {
                        console.error(error);
                      });
                  }}
                >
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
    </div>
  );
};

export default Header;
