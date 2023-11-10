import { PageMetadata } from '@/components/PageSchema';
import { GET_PAGE_METADATA } from '@/db/queries/schema';
import { Metadata } from 'next';
import { getClient } from '../apollo/client';

export async function getPageMetadata(
  pageId: string | number
): Promise<Metadata> {
  const id = typeof pageId === 'number' ? String(pageId) : pageId;

  const { data } = await getClient().query<PageMetadata>({
    query: GET_PAGE_METADATA,
    variables: {
      id,
    },
  });

  const {
    page: { seo },
  } = data;

  const {
    opengraphTitle,
    opengraphDescription,
    opengraphImage,
    title,
    metaDesc,
  } = seo;

  return {
    title,
    description: metaDesc,
    openGraph: {
      title: opengraphTitle,
      description: opengraphDescription,
      images: opengraphImage?.link ? opengraphImage?.link : '',
    },
  };
}
