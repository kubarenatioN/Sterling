import BlogPosts from '@/components/BlogPosts';
import PageHeading from '@/components/PageHeading';
import { PageSchema } from '@/components/PageSchema';
import { pagesDbId } from '@/lib/configs/common.config';
import { getPageMetadata } from '@/lib/helpers/page-metadata';
import { Metadata } from 'next';

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
  return (
    <>
      <PageSchema id={pagesDbId.Blog} />
      <PageHeading></PageHeading>

      <div className='mt-8 container'>
        <h1 className='text-3xl text-center'>Discover our blog</h1>
        <BlogPosts />
      </div>
    </>
  );
};

export default page;
