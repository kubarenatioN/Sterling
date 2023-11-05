import { gql } from '@apollo/client';

export const GET_TEAM = gql`
  query Team {
    teamMembers {
      nodes {
        teamMember {
          description
          fullName
          position
          photo {
            sourceUrl
          }
        }
        date
      }
    }
  }
`;
