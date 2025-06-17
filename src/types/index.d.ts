declare type IChildren = { children: React.ReactNode };
declare type IClassName = { className?: string };
declare type ISearchParams = { searchParams: { id: string; email: string } };
declare type IClassNameWithChildren = IChildren & IClassName;
