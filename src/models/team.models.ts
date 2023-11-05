export interface TeamData {
  teamMembers: {
    nodes: {
      teamMember: TeamMember;
      date: string;
    }[];
  };
}

export interface TeamMember {
  description: string;
  fullName: string;
  position?: string;
  photo: {
    sourceUrl: string;
  };
}
