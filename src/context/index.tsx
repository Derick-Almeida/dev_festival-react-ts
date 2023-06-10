import { IProviderProps } from "./types";

import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }: IProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
