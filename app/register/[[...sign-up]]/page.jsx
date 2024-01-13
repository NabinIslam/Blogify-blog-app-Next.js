import { SignUp } from '@clerk/nextjs';

export const metadata = {
  title: 'Blogify | Register',
};

const Register = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <SignUp />
    </main>
  );
};

export default Register;
