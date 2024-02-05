import { Button } from 'flowbite-react';
import Link from 'next/link';
import { Lemon } from 'next/font/google';

const lemon = Lemon({
  subsets: ['latin'],
  weight: ['400'],
});

const HeroSection = () => {
  return (
    <section className="h-screen w-full">
      <div className="absolute top-0 left-0 w-full h-screen bg-[rgba(0,0,0,.4)]"></div>
      <video
        className="w-full h-screen object-cover"
        src="/people.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-screen top-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className={`font-bold text-5xl lg:text-6xl ${lemon.className}`}>
          Welcome to Blogify
        </h1>
        <p className="text-xl mt-3">
          Share your Experience & Knowledge <br /> to the world
        </p>
        <Link className="mt-5" href="/post-blog">
          <Button gradientDuoTone="purpleToBlue">Post a Article Now!</Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
