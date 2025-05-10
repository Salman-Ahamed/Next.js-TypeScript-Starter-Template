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
