import BlogCard from './BlogCard';

async function getPosts(sortBy = '') {
  const res = await fetch(
    `https://blogify-r01e.onrender.com/api/posts/?sort=${sortBy}`,
    {
      cache: 'no-cache',
    }
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  return res.json();
}

const BlogsContainer = async ({ sortBy }) => {
  const data = await getPosts(sortBy);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data?.posts?.map(post => (
        <BlogCard key={post._id} post={post} />
      ))}
    </section>
  );
};

export default BlogsContainer;
