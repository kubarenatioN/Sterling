import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';
import MobileMenu from '@/components/MobileMenu';
import { PostSchema } from '@/components/PageSchema';
import { GET_POST } from '@/db/queries/blog';
import { getClient } from '@/lib/apollo/client';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Image from 'next/image';
import { blogStyles } from './styles';
import styles from './styles.module.scss';

interface pageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const {
    data: { post },
  } = await getClient().query({
    query: GET_POST,
    variables: {
      slug,
    },
  });

  const { title, content, featuredImage, databaseId, excerpt } = post;

  const metadata: Metadata = {
    title,
    description: excerpt,
  };

  return metadata;
}

const page = async ({ params }: pageProps) => {
  const { slug } = params;

  const {
    data: { post },
  } = await getClient().query({
    query: GET_POST,
    variables: {
      slug,
    },
  });

  const { title, content, featuredImage, databaseId } = post;

  const blogImage = featuredImage ? featuredImage.node.sourceUrl : null;

  return (
    <>
      <style>{blogStyles}</style>
      <PostSchema id={slug} />

      <HeaderWrapper></HeaderWrapper>

      <div className='md:hidden'>
        <MobileMenu></MobileMenu>
      </div>

      <div className='relative w-full min-h-[400px] bg-zinc-800'>
        {blogImage && (
          <Image
            src={blogImage}
            priority
            alt='Blog featured image'
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        )}
      </div>
      <div className='max-w-[840px] mx-auto px-2'>
        <h1 className='text-4xl py-4'>{title}</h1>
        <div
          className={cn('blog leading-relaxed', styles.blog)}
          dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default page;
