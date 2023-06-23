'use client';

import { Select } from 'flowbite-react';

const FilterBlogs = ({ setlatest, setOldest }) => {
  const handleBlogFilter = event => {
    event.preventDefault();

    event.target.value === 'latest' ? setlatest(true) : setlatest(false);
    event.target.value === 'oldest' ? setOldest(true) : setOldest(false);
  };

  return (
    <section className="flex justify-between items-center py-4">
      <h4 className="font-bold text-2xl">Blogs</h4>

      <div className="flex items-center">
        <span className="mr-2">Sort By:</span>
        <Select id="countries" onChange={handleBlogFilter}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </div>
    </section>
  );
};

export default FilterBlogs;
