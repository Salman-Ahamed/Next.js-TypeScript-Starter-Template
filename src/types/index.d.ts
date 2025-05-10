declare interface IChildren {
  children: React.ReactNode;
}
declare interface IClassName {
  className?: string;
}
declare interface ISearchParams {
  searchParams: { callbackUrl: string; email: string };
}

declare interface ICallbackUrl {
  callbackUrl: string;
}

declare interface IClassNameWithChildren extends IChildren, IClassName {}

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
    path: string;
  }[];
  privacy: {
    id: number;
    name: string;
    path: string;
  }[];
}
