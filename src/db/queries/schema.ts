import { gql } from '@apollo/client';

export const GET_PAGE_SCHEMA = gql`
  query PageSchema($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      slug
      databaseId
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
        twitterImage {
          sourceUrl
        }
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
        fullHead
      }
    }
  }
`;
