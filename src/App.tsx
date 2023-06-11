import GlobalStyle from "./style/global";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeProvider";
import PageRoutes from "./routes";

function App() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={{ ...themeColor }} />

      <PageRoutes />
    </>
  );
}

export default App;
