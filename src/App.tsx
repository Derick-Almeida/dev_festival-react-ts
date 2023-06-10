import GlobalStyle from "./style/global";
import { useContext } from "react";

import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={{ themeColor }} />
      <Header />
    </>
  );
}

export default App;
