export interface ServicesData {
  services: {
    nodes: {
      serviceInfo: ServiceItem;
    }[];
  };
}

export interface ServiceItem {
  description: string;
  title: string;
  image: {
    sourceUrl: string;
  };
}
