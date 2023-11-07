import { gql } from '@apollo/client';

export const GET_POST = (slug: string) => {
  return gql`
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        slug
        title
        databaseId
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;
};
