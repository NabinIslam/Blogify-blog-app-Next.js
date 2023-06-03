const getData = async params => {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/api/v1/blogs/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const BlogDetail = async ({ params }) => {
  const singleBlog = await getData(params);

  return (
    <main>
      <div className="container mx-auto py-10 px-5">
        <h1 className="font-bold text-4xl mb-5">{singleBlog.title}</h1>
        <p className="mb-5">
          <span className="font-bold">Written by:</span>{' '}
          {singleBlog.author.name}{' '}
        </p>
        <p>{singleBlog.content}</p>
      </div>
    </main>
  );
};

export default BlogDetail;
