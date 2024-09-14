import { Button } from "flowbite-react";
import Link from "next/link";
import { Lemon } from "next/font/google";

const lemon = Lemon({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection = () => {
  return (
    <section className="h-screen w-full">
      <div className="absolute left-0 top-0 h-screen w-full bg-[rgba(0,0,0,.4)]"></div>
      <video
        className="h-screen w-full object-cover"
        src="/people.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 flex h-screen w-full flex-col items-center justify-center text-center text-white">
        <h1 className={`text-5xl font-bold lg:text-6xl ${lemon.className}`}>
          Welcome to Blogify
        </h1>
        <p className="mt-3 text-xl">
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
