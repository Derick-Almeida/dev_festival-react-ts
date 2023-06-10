import GlobalStyle from "./style/global";
import { useContext } from "react";

import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeProvider";
import Footer from "./components/Footer";

function App() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyle theme={{ themeColor }} />
      <Header />

      <Footer />
    </>
  );
}

export default App;
