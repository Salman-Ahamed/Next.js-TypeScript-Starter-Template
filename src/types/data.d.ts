export interface IFooterLinks {
  quickLinks: {
    id: number;
    name: string;
    path: string;
  }[];
  resources: {
    id: number;
    name: string;
    path: string;
  }[];
  contact: {
    id: number;
    name: string;
    Icon: JSX.Element;
    path: string;
  }[];
  privacy: {
    id: number;
    name: string;
    path: string;
  }[];
}
