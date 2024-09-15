import Image from "next/image";
import parse from "html-react-parser";
import { Suspense } from "react";
import BlogDetailsSkeleton from "@/components/skeletons/BlogDetailsSkeleton";
import { formatDate } from "@/utils/formatDate";

async function getPost(slug) {
  const res = await fetch(
    `https://blogify-r01e.onrender.com/api/posts/slug/${slug}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogDetails = async ({ params }) => {
  const { slug } = params;

  const data = await getPost(slug);

  const { title, content, image, author, createdAt } = data?.post;

  return (
    <main>
      <div className="container mx-auto px-5 py-20">
        <Suspense fallback={<BlogDetailsSkeleton />}>
          <div className="mx-auto max-w-4xl text-center">
            <Image
              className="mx-auto rounded-full"
              src={author?.image}
              alt={author?.username}
              height={70}
              width={70}
            />

            <h3 className="mt-1 text-lg font-semibold text-slate-500">
              {author?.name}
            </h3>

            <h4 className="text-sm text-slate-500">{formatDate(createdAt)}</h4>

            <h1 className="mb-5 mt-5 text-2xl font-bold lg:text-3xl">
              {title}
            </h1>

            <div className="relative mb-10 h-auto max-w-full">
              <Image
                className="h-auto w-full rounded-lg"
                src={image}
                width="0"
                height="0"
                sizes="100vw"
                alt={slug}
              />
            </div>

            <div className="text-left">{parse(content)}</div>
          </div>
        </Suspense>
      </div>
    </main>
  );
};

export default BlogDetails;
