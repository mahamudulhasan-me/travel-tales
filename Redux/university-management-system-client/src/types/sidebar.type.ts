import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export interface IPath {
  name: string;
  path?: string;
  element?: JSX.Element;
  children?: IPath[];
}
