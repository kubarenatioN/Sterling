export interface AboutUsInfo {
  abouts: {
    nodes: {
      aboutMain: {
        text: string;
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
