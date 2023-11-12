'use client';

import { GET_BLOG_POSTS } from '@/db/queries/blog';
import { BlogPostsList } from '@/models/blog.models';
import { Button } from '@/ui-kit/ui/button';
import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import format from 'date-fns/format';
import { LucideImage } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Loader from './Loader';

const PAGE_SIZE = 4;

const BlogPostsList = ({ searchQuery }: { searchQuery: string }) => {
  const [search, setSearch] = useState(searchQuery);

  const { data, error, fetchMore, loading } = useQuery<BlogPostsList>(
    GET_BLOG_POSTS,
    {
      variables: {
        first: PAGE_SIZE,
        last: null,
        after: null,
        before: null,
        title: search,
      },
    }
  );

  useEffect(() => {
    setSearch(searchQuery);
    fetchMore({
      variables: {
        first: PAGE_SIZE,
        last: null,
        after: null,
        before: null,
        title: searchQuery,
      },
      updateQuery,
    });
  }, [searchQuery, fetchMore]);

  const [isLoading, setIsLoading] = useState(false);

  if (error) {
    return <div>There was an error: {error.message}</div>;
  }

  if (loading) {
    return (
      <div className='w-full min-h-[400px] flex justify-center items-center'>
        <Loader></Loader>
      </div>
    );
  }

  const {
    posts: { edges, pageInfo },
  } = data!;

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;
  console.log(pageInfo);

  // Function to update the query with the new results
  // @ts-ignore
  function updateQuery(previousResult, { fetchMoreResult }) {
    setIsLoading(false);

    return fetchMoreResult.posts.edges.length
      ? fetchMoreResult
      : previousResult;
  }

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-6'>
        {edges && edges.length > 0 ? (
          edges.map((edge) => {
            const { node, cursor } = edge;
            const {
              databaseId,
              slug,
              title,
              featuredImage,
              excerpt,
              modified,
            } = node;

            return (
              <Link
                href={'blog/' + slug}
                key={databaseId}
                role='button'
                className='min-h-[200px] w-[300px] flex flex-col rounded-md shadow-md shadow-neutral-300 duration-200 hover:scale-[1.02] overflow-hidden'>
                {featuredImage ? (
                  <Image
                    src={featuredImage.node.sourceUrl}
                    height={140}
                    width={300}
                    alt='Blog post image'
                    style={{
                      width: 300,
                      height: 140,
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div className='bg-zinc-100 h-[140px] w-full flex justify-center items-center'>
                    <LucideImage />
                  </div>
                )}
                <div className='px-3 pt-2 pb-4 flex flex-col grow'>
                  <span className='font-bold min-h-[3rem]'>{title}</span>
                  <div
                    className='text-sm line-clamp-3'
                    dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                  <div className='mt-auto pt-2'>
                    {modified && (
                      <p className='text-xs text-right italic text-neutral-500'>
                        {format(new Date(modified), 'MMM dd, yyyy')}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div>No results found...</div>
        )}
      </div>

      <div className='py-4 flex justify-center gap-4'>
        {hasPreviousPage && (
          <Button
            className='w-40'
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              fetchMore({
                variables: {
                  first: null,
                  last: PAGE_SIZE,
                  after: null,
                  before: startCursor ?? null,
                  title: search,
                },
                updateQuery,
              });
            }}>
            Previous page
          </Button>
        )}

        {hasNextPage && (
          <Button
            className='w-40'
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              fetchMore({
                variables: {
                  first: PAGE_SIZE,
                  last: null,
                  after: endCursor ?? null,
                  before: null,
                  title: search,
                },
                updateQuery,
              });
            }}>
            Next page
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogPostsList;
