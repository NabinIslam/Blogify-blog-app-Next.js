'use client';

import { Select } from 'flowbite-react';

const FilterBlogs = ({ setlatest, setOldest }) => {
  const handleBlogFilter = event => {
    event.preventDefault();

    if (event.target.value === 'latest') {
      setlatest(true);
    } else {
      setlatest(false);
    }

    if (event.target.value === 'oldest') {
      setOldest(true);
    } else {
      setOldest(false);
    }
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
