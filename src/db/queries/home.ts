import { gql } from '@apollo/client';

export const GET_HOME_MAIN = gql`
  query HomePage {
    page(id: "15", idType: DATABASE_ID) {
      id
      slug
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      homeMain {
        motto
        excerpt
      }
      homeConsulting {
        text
        image {
          sourceUrl
        }
        ctaText
      }
    }
  }
`;

export const GET_ACHIEVEMENTS = gql`
  query Achievements {
    achievements(first: 5) {
      nodes {
        achievementGeneral {
          description
          title
          imageMd {
            sourceUrl
          }
        }
      }
    }
  }
`;
