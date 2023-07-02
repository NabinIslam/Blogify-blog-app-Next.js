'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import GoogleButton from 'react-google-button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Loading from './loading';

const LoginPage = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const { handleSubmit, reset, register } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        setLoading(true);
        router.push('/');
        toast('Login successful 🎉');
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  const handleSignIn = data => {
    signIn(data.email, data.password)
      .then(() => {
        setLoading(true);
        reset();
        router.push('/');
        toast('Login successful 🎉');
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error(err.message);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="py-24">
      <div className="container mx-auto">
        <form
          className="flex flex-col gap-4 max-w-md mx-auto"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email address" />
            </div>
            <TextInput
              {...register('email')}
              id="email"
              type="email"
              placeholder="Your email address"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              {...register('password')}
              id="password"
              type="password"
              required={true}
            />
          </div>
          <Button gradientDuoTone="purpleToBlue" type="submit">
            Login
          </Button>
          <p className="text-sm text-center">
            Don't have an account?{' '}
            <Link className="font-bold hover:underline" href="/register">
              Register
            </Link>
          </p>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <GoogleButton
            className="mx-auto"
            type="dark"
            onClick={() => handleGoogleSignIn()}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
