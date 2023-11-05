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
    freeConsulting(id: "121", idType: DATABASE_ID) {
      freeConsulting {
        text
      }
    }
  }
`;
