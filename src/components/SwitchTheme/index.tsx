import { useContext } from "react";
import * as S from "./style";

import { LuMoon, LuSun } from "react-icons/lu";
import { ThemeContext } from "../../context/ThemeProvider";

const SwitchTheme = () => {
  const { darkTheme, switchTheme } = useContext(ThemeContext);

  return <S.button onClick={switchTheme}>{darkTheme ? <LuSun /> : <LuMoon />}</S.button>;
};

export default SwitchTheme;
