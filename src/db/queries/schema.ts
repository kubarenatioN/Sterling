import { gql } from '@apollo/client';

export const GET_PAGE_METADATA = gql`
  query PageMetadata($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      slug
      databaseId
      id
      seo {
        opengraphUrl
        opengraphType
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage {
          link
        }
        opengraphAuthor
        opengraphDescription
        twitterTitle
        twitterDescription
        title
        readingTime
        metaKeywords
        metaDesc
        canonical
        breadcrumbs {
          text
          url
        }
      }
    }
  }
`;

export const GET_PAGE_SCHEMA = gql`
  query PageSchema($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      slug
      databaseId
      seo {
        schema {
          raw
        }
      }
    }
  }
`;

export const GET_POST_SCHEMA = gql`
  query PostSchema($id: ID!) {
    post(id: $id, idType: SLUG) {
      slug
      databaseId
      seo {
        schema {
          raw
        }
      }
    }
  }
`;
