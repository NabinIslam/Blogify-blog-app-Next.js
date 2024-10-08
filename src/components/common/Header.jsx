"use client";

import { Avatar, Button, Dropdown } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useClerk, useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import SearchBlog from "../SearchBlog";

const Header = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between px-2 py-2">
        <div className="flex basis-4/12 pl-2">
          <Link className="inline-flex" href="/">
            <Image
              className="h-6 w-auto"
              src="/logo.png"
              height={20}
              width={100}
              priority
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden basis-4/12 md:block">
          <SearchBlog />
        </div>
        <div className="flex basis-4/12 items-center justify-end">
          {user && (
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
                <Dropdown.Item>Post A Article</Dropdown.Item>
              </Link>
              <Link href="/my-posts">
                <Dropdown.Item>My Posts</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() =>
                  signOut(() => {
                    router.push("/");
                    toast.success(`Logged out successfully`);
                  })
                }
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          )}

          {!user && (
            <Link href={"/login"}>
              <Button gradientDuoTone="purpleToBlue" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="mx-2 mb-2 md:hidden">
        <SearchBlog />
      </div>
    </header>
  );
};

export default Header;
