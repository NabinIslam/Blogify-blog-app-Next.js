import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Blogify | Login',
};

const Login = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <SignIn />
    </main>
  );
};

export default Login;
