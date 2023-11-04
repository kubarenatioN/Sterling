export interface AboutUsInfo {
  abouts: {
    nodes: {
      aboutMain: {
        text: string;
        excerpt: string;
        image: {
          sourceUrl: string;
        };
      };
    }[];
  };
  values: {
    nodes: {
      companyValues: {
        title: string;
        description: string;
      };
    }[];
  };
  projects: {
    nodes: {
      project: {
        image: {
          sourceUrl: string;
        };
      };
    }[];
  };
}
