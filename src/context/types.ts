import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export type ThemeColors =
  | { bg: "var(--white)"; text: "var(--black)" }
  | { bg: "var(--blue-2)"; text: "var(--white)" };

export interface IThemeProps {
  themeColor: { bg: string; text: string };
  darkTheme: boolean;
  switchTheme: () => void;
}
