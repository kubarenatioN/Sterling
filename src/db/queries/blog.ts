import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
  query BlogPosts($first: Int, $last: Int, $after: String, $before: String) {
    posts(first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          id
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
  }
`;

export const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      slug
      id
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
