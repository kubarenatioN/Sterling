import { gql } from '@apollo/client';

export const ABOUT_QUERY = gql`
  query AboutUsPage {
    abouts {
      nodes {
        aboutMain {
          text
          image {
            sourceUrl
          }
          excerpt
        }
      }
    }
    values {
      nodes {
        companyValues {
          title
          description
        }
      }
    }
    projects {
      nodes {
        project {
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
