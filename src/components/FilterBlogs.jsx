"use client";

import { useQuery } from "@tanstack/react-query";
import { Select } from "flowbite-react";

const FilterBlogs = ({ setSortBy, setFilterBy }) => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("https://blogify-r01e.onrender.com/api/categories").then((res) =>
        res.json(),
      ),
  });

  const handleBlogFilter = (event) => setSortBy(event.target.value);
  const handleCategoryFilter = (event) => setFilterBy(event.target.value);

  return (
    <section className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
      <h4 className="text-2xl font-bold">Articles</h4>

      <div className="flex items-center justify-between gap-2">
        <span className="flex flex-col items-start gap-1 md:flex-row md:items-center">
          <span className="text-sm">Category:</span>
          <Select sizing="sm" onChange={handleCategoryFilter}>
            <option value="">All</option>
            {categories?.categories?.map((category) => (
              <option value={category.slug} key={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
        </span>
        <span className="flex flex-col items-start gap-1 md:flex-row md:items-center">
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
