import { FreeConsultingData } from './common.models';

export interface ServicesData {
  services: {
    nodes: {
      serviceInfo: ServiceItem;
    }[];
  };
  freeConsulting: FreeConsultingData;
}

export interface ServiceItem {
  description: string;
  title: string;
  image: {
    sourceUrl: string;
  };
}
