import { GET_PAGE_SCHEMA, GET_POST_SCHEMA } from '@/db/queries/schema';
import { getClient } from '@/lib/apollo/client';

interface SchemaProps {
  id: string;
}

interface PageSchemaData {
  page: {
    seo: {
      fullHead: string;
    };
  };
}

interface PostSchemaData {
  post: {
    seo: {
      fullHead: string;
    };
  };
}

const PageSchema = async ({ id }: SchemaProps) => {
  const { data } = await getClient().query<PageSchemaData>({
    query: GET_PAGE_SCHEMA,
    variables: {
      id,
    },
  });

  return (
    <div dangerouslySetInnerHTML={{ __html: data.page.seo.fullHead }}></div>
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
