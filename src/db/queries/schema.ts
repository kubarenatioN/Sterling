import { gql } from '@apollo/client';

export const GET_PAGE_SCHEMA = gql`
  query PageSchema($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      slug
      databaseId
      seo {
        fullHead
      }
    }
  }
`;

export const GET_POST_SCHEMA = gql`
  query PostSchema($id: ID!) {
    post(id: $id, idType: SLUG) {
      slug
      databaseId
      seo {
        fullHead
      }
    }
  }
`;
