import { GET_POST_SCHEMA } from '@/db/queries/schema';
import { getClient } from '@/lib/apollo/client';

interface SchemaProps {
  id: string;
}

interface PageSchemaData {
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

interface PostSchemaData {
  post: {
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

const PageSchema = async ({ schema }: { schema: string }) => {
  // const { data } = await getClient().query<PageSchemaData>({
  //   query: GET_PAGE_SCHEMA,
  //   variables: {
  //     id,
  //   },
  // });

  return (
    <>
      {/* Page Schema */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: schema }}></script>
    </>
  );
};

const PostSchema = async ({ id }: SchemaProps) => {
  const { data } = await getClient().query<PostSchemaData>({
    query: GET_POST_SCHEMA,
    variables: {
      id,
    },
  });

  console.log(data);

  return <div>slug: {id}</div>;
};

export { PageSchema };
