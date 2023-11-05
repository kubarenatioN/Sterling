import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
  query Services {
    services {
      nodes {
        serviceInfo {
          description
          title
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;
