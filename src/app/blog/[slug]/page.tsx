import Footer from '@/components/Footer';
import HeaderWrapper from '@/components/HeaderWrapper';
import MobileMenu from '@/components/MobileMenu';
import { PostSchema } from '@/components/PageSchema';
import { GET_POST } from '@/db/queries/blog';
import { getClient } from '@/lib/apollo/client';
import fs from 'fs/promises';
import { Metadata } from 'next';
import Image from 'next/image';

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

  const metadata: Metadata = {
    title: '',
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
      <style>
        {`
        h2 {
          font-size: 6rem;
          color: green;
        }
        
        p {
          margin: 15px 0;
        }

        ul, ol {
          list-style: circle;
        }
        li {
          padding: 10px 0;
        }
      `}
      </style>
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
          className='leading-relaxed'
          dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <Footer></Footer>
    </>
  );
};

const getFileContent = async (filePath: string) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
};

export default page;
