import { ReactNode } from "react";

export interface IProviderProps {
  children: ReactNode;
}

export type ThemeColors = "var(--white)" | "var(--blue-2)";

export interface IThemeProps {
  themeColor: string;
  darkTheme: boolean;
  switchTheme: () => void;
}
