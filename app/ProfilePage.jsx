'use client';

import { AuthContext } from '@/context/AuthContext';
import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from './loading';
import { toast } from 'react-hot-toast';

const ProfilePage = () => {
  const { handleSubmit, register, reset } = useForm();
  const { updateUserProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleUpdateProfile = data => {
    updateUserProfile(data.fullName).then(() => {
      setLoading(true);
      reset();
      toast.success('Profile updated successfully');
    });
  };

  if (loading) <Loading />;

  return (
    <main>
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-center font-bold text-4xl">Update Your Profile</h1>
        <form
          className="max-w-md mx-auto my-10"
          action=""
          onSubmit={handleSubmit(handleUpdateProfile)}
        >
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Your full name" />
            </div>
            <TextInput
              {...register('fullName')}
              type="text"
              value={user?.displayName}
              placeholder="Enter your full name"
              required
            />
          </div>

          <Button gradientDuoTone="purpleToBlue" type="submit">
            Update
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ProfilePage;
