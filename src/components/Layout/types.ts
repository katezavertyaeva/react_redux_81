import type { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface NavLinkObj {
  to: string;
  linkName: string;
}
