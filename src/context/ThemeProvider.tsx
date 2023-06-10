import { createContext, useEffect, useState } from "react";
import { IProviderProps, IThemeProps, ThemeColors } from "./types";

export const ThemeContext = createContext<IThemeProps>({} as IThemeProps);

const ThemeProvider = ({ children }: IProviderProps) => {
  const [darkTheme, setdarkTheme] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<ThemeColors>({
    bg: "var(--blue-2)",
    text: "var(--white)",
  });

  useEffect(() => {
    if (!darkTheme) {
      setThemeColor({ bg: "var(--white)", text: "var(--black)" });
    }
    if (darkTheme) {
      setThemeColor({ bg: "var(--blue-2)", text: "var(--white)" });
    }
  }, [darkTheme]);

  const switchTheme = () => {
    setdarkTheme(!darkTheme);

    return null;
  };

  return (
    <ThemeContext.Provider value={{ themeColor, darkTheme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
