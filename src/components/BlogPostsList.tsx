'use client';

import { GET_BLOG_POSTS } from '@/db/queries/blog';
import { BlogPostsList } from '@/models/blog.models';
import { Button } from '@/ui-kit/ui/button';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Link from 'next/link';
import { FC } from 'react';

const PAGE_SIZE = 4;

interface BlogPostsListProps {}

const BlogPostsList: FC<BlogPostsListProps> = ({}) => {
  const { data, error, fetchMore } = useSuspenseQuery<BlogPostsList>(
    GET_BLOG_POSTS,
    {
      variables: {
        first: PAGE_SIZE,
        last: null,
        after: null,
        before: null,
      },
    }
  );

  if (error) {
    return <div>{error.message}</div>;
  }

  const {
    posts: { edges, pageInfo },
  } = data;

  const { hasNextPage, hasPreviousPage, startCursor, endCursor } = pageInfo;

  return (
    <div>
      <div className='flex'>
        {edges.map((edge) => {
          const { node, cursor } = edge;
          const { databaseId, slug, title, featuredImage, excerpt } = node;

          return (
            <div key={databaseId} className='w-[300px]'>
              <span>{title}</span>
              <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
              <Link href={'blog/' + slug}>Read</Link>
            </div>
          );
        })}
      </div>
      <div>
        {hasPreviousPage && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  first: null,
                  last: PAGE_SIZE,
                  after: null,
                  before: startCursor ?? null,
                },
                updateQuery,
              })
            }>
            Prev
          </Button>
        )}

        {hasNextPage && (
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  first: PAGE_SIZE,
                  last: null,
                  after: endCursor ?? null,
                  before: null,
                },
                updateQuery,
              })
            }>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

// Function to update the query with the new results
// @ts-ignore
function updateQuery(previousResult, { fetchMoreResult }) {
  return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
}

export default BlogPostsList;
