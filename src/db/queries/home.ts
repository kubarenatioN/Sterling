import { gql } from '@apollo/client';

export const GET_HOME_MAIN = gql`
  query HomePage {
    page(id: "15", idType: DATABASE_ID) {
      id
      homeMain {
        motto
        excerpt
      }
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_ACHIEVEMENTS = gql`
  query Achievements {
    achievements {
      nodes {
        title
      }
    }
  }
`;
