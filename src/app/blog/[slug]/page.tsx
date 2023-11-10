import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';
import MobileMenu from '@/components/MobileMenu';
import { GET_POST } from '@/db/queries/posts';
import { getClient } from '@/lib/apollo/client';
import Image from 'next/image';

interface pageProps {
  params: {
    slug: string;
  };
}

const page = async ({ params }: pageProps) => {
  const { slug } = params;

  const {
    data: { post },
  } = await getClient().query({
    query: GET_POST(slug),
    variables: {
      slug,
    },
  });

  const { title, content, featuredImage, databaseId } = post;

  const blogImage = featuredImage ? featuredImage.node.sourceUrl : null;

  return (
    <>
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
      <div className='w-[840px] mx-auto'>
        <h1 className='text-center text-4xl py-4'>{title}</h1>
        <div
          className='leading-relaxed'
          dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default page;
