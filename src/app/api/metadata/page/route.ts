import { GET_PAGE_SCHEMA } from '@/db/queries/schema';
import { getClient } from '@/lib/apollo/client';
import { NextRequest, NextResponse } from 'next/server';

export interface PageSchemaData {
  page: {
    seo: {
      opengraphUrl: string;
      opengraphType: string;
      opengraphTitle: string;
      opengraphSiteName: string;
      opengraphPublisher: string;
      opengraphPublishedTime: string;
      opengraphModifiedTime: string;
      opengraphImage: {
        link: string;
      };
      opengraphAuthor: string;
      opengraphDescription: string;
      twitterTitle: string;
      twitterImage: {
        sourceUrl: string;
      };
      twitterDescription: string;
      title: string;
      readingTime: string;
      metaKeywords: string;
      metaDesc: string;
      canonical: string;
      breadcrumbs: {
        text: string;
        url: string;
      };
      schema: {
        raw: string;
      };
    };
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get('id');

  const { data } = await getClient().query<PageSchemaData>({
    query: GET_PAGE_SCHEMA,
    variables: {
      id,
    },
  });

  return NextResponse.json(data);
}
