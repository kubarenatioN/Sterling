import { gql } from '@apollo/client';

export const GET_BLOG = gql`
  query BlogPosts {
    posts {
      nodes {
        title
        slug
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        databaseId
      }
    }
  }
`;
