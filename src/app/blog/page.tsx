import PageHeading from '@/components/PageHeading';
import { GET_BLOG } from '@/db/queries/blog';
import { getClient } from '@/lib/apollo/client';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { BlogPageData } from '@/models/blog.models';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getPageMetadata(pagesDbId.Blog);

  return {
    ...metadata,
    alternates: {
      canonical: process.env.CLIENT_DOMAIN,
    },
  };
}

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
