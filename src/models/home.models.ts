export interface HomeMain {
  page: {
    __typename: string;
    id: string;
    slug: string;
    title: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    homeMain: {
      __typename: string;
      motto: string;
      excerpt: string;
    };
    homeConsulting: ConsultingBlockData;
    homeAchievements: AchievementsBlockData;
  };
}

export interface ConsultingBlockData {
  text: string;
  image: {
    sourceUrl: string;
  };
  ctaText: string;
}

export interface AchievementsBlockData {
  achievements: {
    nodes: {
      achievementGeneral: {
        description: string;
        title: string;
        imageMd: {
          sourceUrl: string;
        };
      };
    }[];
  };
}
