import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
  query BlogPosts(
    $first: Int
    $last: Int
    $after: String
    $before: String
    $title: String
  ) {
    posts(
      first: $first
      last: $last
      after: $after
      before: $before
      where: { search: $title }
    ) {
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
          modified
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
      excerpt
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
