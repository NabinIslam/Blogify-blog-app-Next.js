'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import GoogleButton from 'react-google-button';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const router = useRouter();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        router.push('/');
        toast('Login successful 🎉');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="py-24">
      <div className="container mx-auto">
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button gradientDuoTone="purpleToBlue" type="submit">
            Submit
          </Button>
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

export default Login;
