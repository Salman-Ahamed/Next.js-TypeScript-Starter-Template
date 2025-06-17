import { IconSvgProps } from "./common";

type Link = { id: number; name: string; path: string };
type ContactLink = Link & { Icon: React.ComponentType<IconSvgProps> };

export interface FooterLinks {
  quickLinks: Link[];
  resources: Link[];
  contact: ContactLink[];
  privacy: Link[];
}
