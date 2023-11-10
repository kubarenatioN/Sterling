export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  } | null;
  databaseId: number;
}

export interface BlogPageData {
  posts: {
    nodes: BlogPost[];
  };
}
