import Image from 'next/image';
import parse from 'html-react-parser';

async function getPost(slug) {
  const res = await fetch(
    `https://blogify-r01e.onrender.com/api/posts/${slug}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const BlogDetails = async ({ params }) => {
  const { slug } = params;

  const data = await getPost(slug);

  const { title, content, image, author, createdAt } = data?.post;

  return (
    <main>
      <div className="container mx-auto py-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            className="mx-auto rounded-full"
            src={author?.image}
            alt={author?.username}
            height={70}
            width={70}
          />

          <h3 className="text-lg mt-1">{author?.username}</h3>

          <h4>{createdAt}</h4>

          <h1 className="font-bold text-2xl lg:text-3xl mb-5 mt-5">{title}</h1>

          <div className="relative max-w-full h-auto mb-10">
            <Image
              className="w-full h-auto rounded-lg"
              src={image}
              width="0"
              height="0"
              sizes="100vw"
              alt={slug}
            />
          </div>

          <div className="text-left">{parse(content)}</div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;