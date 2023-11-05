import { gql } from '@apollo/client';

export const GET_FREE_CONSULTING = gql`
  query FreeConsulting {
    freeConsulting(id: "121", idType: DATABASE_ID) {
      freeConsulting {
        text
      }
    }
  }
`;
