'use client';

import { useQuery } from '@tanstack/react-query';
import { Select } from 'flowbite-react';

const FilterBlogs = ({ setSortBy, setFilterBy }) => {
  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch('https://blogify-r01e.onrender.com/api/categories').then(res =>
        res.json()
      ),
  });

  const handleBlogFilter = event => setSortBy(event.target.value);
  const handleCategoryFilter = event => setFilterBy(event.target.value);

  return (
    <section className="flex justify-between items-center py-4">
      <h4 className="font-bold text-2xl">Blogs</h4>

      <div className="flex items-center gap-2">
        <span>Category:</span>
        <Select id="timeSort" onChange={handleCategoryFilter}>
          <option value="">All</option>
          {categories?.categories?.map(category => (
            <option value={category.slug} key={category._id}>
              {category.name}
            </option>
          ))}
        </Select>
        <span>Sort By:</span>
        <Select id="filter" onChange={handleBlogFilter}>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </Select>
      </div>
    </section>
  );
};

export default FilterBlogs;
