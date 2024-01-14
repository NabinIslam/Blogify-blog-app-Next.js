import { UserProfile } from '@clerk/nextjs';

export const metadata = {
  title: 'Blogify | Profile',
};

const Profile = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <UserProfile />
    </main>
  );
};

export default Profile;
