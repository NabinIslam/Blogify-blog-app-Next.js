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
    <section className="flex flex-col md:flex-row gap-4 justify-between items-center py-4">
      <h4 className="font-bold text-2xl">Articles</h4>

      <div className="flex items-center justify-between gap-2">
        <span className="flex flex-col md:flex-row items-start md:items-center gap-1">
          <span className="text-sm">Category:</span>
          <Select sizing="sm" onChange={handleCategoryFilter}>
            <option value="">All</option>
            {categories?.categories?.map(category => (
              <option value={category.slug} key={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
        </span>
        <span className="flex flex-col md:flex-row items-start md:items-center gap-1">
          <span className="text-sm">Sort By:</span>
          <Select sizing="sm" onChange={handleBlogFilter}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </Select>
        </span>
      </div>
    </section>
  );
};

export default FilterBlogs;
