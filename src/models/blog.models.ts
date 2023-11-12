export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
  databaseId: number;
  modified?: string;
}

export interface BlogPostsList {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: {
      cursor: string;
      node: BlogPost;
    }[];
  };
}
