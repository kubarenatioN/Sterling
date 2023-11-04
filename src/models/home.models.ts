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

export interface ReviewsQueryData {
  reviews: {
    nodes: {
      reviewMain: {
        subtext: string;
        reviewText: string;
        authorImage: {
          sourceUrl: string;
        };
        author: string;
      };
    }[];
  };
}

export interface FooterQuery {
  contacts: {
    nodes: {
      contacts: {
        address: string;
        mapUrl: string;
        phones: string;
        workingHours: string;
        map?: string;
      };
    }[];
  };
  socials: {
    nodes: {
      socialLink: {
        id: string;
        link: string;
      };
    }[];
  };
}
