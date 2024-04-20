'use client';
import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

const SearchBlog = () => {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://blogify-r01e.onrender.com/api/posts`).then(res =>
        res.json()
      ),
  });
  const [selected, setSelected] = useState(data?.posts);
  const [query, setQuery] = useState('');

  const filteredPosts =
    query === ''
      ? data?.posts
      : data?.posts?.filter(post =>
          post.title
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className="w-full border rounded-md">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="shadow-sm relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3  text-sm shadow-sm text-gray-900 focus:ring-0"
              placeholder="Search article"
              displayValue={title => title.name}
              onChange={event => setQuery(event.target.value)}
            />
            {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button> */}
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredPosts?.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPosts?.map(post => (
                  <Combobox.Option
                    key={post._id}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-3 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={post}
                  >
                    {({ selected, active }) => (
                      <Link href={`/blog/${post.slug}`}>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {post.title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          ></span>
                        ) : null}
                      </Link>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBlog;
