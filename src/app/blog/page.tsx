import PageHeading from '@/components/PageHeading';
import { GET_BLOG } from '@/db/queries/blog';
import { getClient } from '@/lib/apollo/client';
import { BlogPageData } from '@/models/blog.models';
import Link from 'next/link';

const page = async () => {
  const { data } = await getClient().query<BlogPageData>({
    query: GET_BLOG,
  });

  const {
    posts: { nodes },
  } = data;

  return (
    <>
      <PageHeading></PageHeading>

      <h1>Discover our blog</h1>

      <div className='flex'>
        {nodes.map((node) => {
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
    </>
  );
};

export default page;
