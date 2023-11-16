'use client';

import { Input } from '@/ui-kit/ui/input';
import { SearchIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import BlogPostsList from './BlogPostsList';

interface BlogPostsProps {}

const BlogPosts: FC<BlogPostsProps> = ({}) => {
  const [search, setSearch] = useState('');

  const onSearch = useDebouncedCallback((query: string) => {
    query = query.trim();
    setSearch(query);
  }, 400);

  return (
    <>
      <div className='flex justify-center py-8'>
        <div className='relative'>
          <Input
            className='w-[300px] pr-10'
            onChange={(e) => onSearch(e.target.value)}></Input>
          <SearchIcon className='absolute right-2 top-2 pointer-events-none' />
        </div>
      </div>
      <BlogPostsList searchQuery={search} />
    </>
  );
};

export default BlogPosts;
