import { createContext, useEffect, useState } from "react";
import { IProviderProps, IThemeProps, ThemeColors } from "./types";

export const ThemeContext = createContext<IThemeProps>({} as IThemeProps);

const ThemeProvider = ({ children }: IProviderProps) => {
  const [darkTheme, setdarkTheme] = useState<boolean>(false);
  const [themeColor, setThemeColor] = useState<ThemeColors>("var(--white)");

  useEffect(() => {
    if (!darkTheme) {
      setThemeColor("var(--white)");
    }
    if (darkTheme) {
      setThemeColor("var(--blue-2)");
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
