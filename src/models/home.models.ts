export interface HomeMain {
  page: {
    __typename: string;
    id: string;
    homeMain: {
      __typename: string;
      motto: string;
      excerpt: string;
    };
    featuredImage: {
      node: {
        srcSet: string;
        sourceUrl: string;
      };
    };
    slug: string;
    title: string;
  };
}
