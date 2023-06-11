import { IProviderProps } from "./types";

import ThemeProvider from "./ThemeProvider";
import { BrowserRouter } from "react-router-dom";

const Providers = ({ children }: IProviderProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
