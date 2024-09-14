import { UserProfile } from "@clerk/nextjs";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Blogify | Profile",
};

const Profile = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <Suspense fallback={<Loading />}>
        <UserProfile />
      </Suspense>
    </main>
  );
};

export default Profile;
