'use client';

const getData = async params => {
  const { id } = params;

  const res = await fetch(
    `https://blogify-blog-mo3759n8a-nabinislam.vercel.app/api/v1/blogs/${id}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const BlogDetail = async ({ params }) => {
  const singleBlog = await getData(params);

  const { title, author, content } = singleBlog;

  return (
    <main>
      <div className="container mx-auto py-10 px-5">
        <h1 className="font-bold text-4xl mb-5">{title}</h1>
        <p className="mb-5">
          <span className="font-bold">Written by: </span>
          {author?.name}
        </p>
        <p>{content}</p>
      </div>
    </main>
  );
};

export default BlogDetail;
