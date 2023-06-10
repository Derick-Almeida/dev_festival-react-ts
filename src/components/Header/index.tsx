import * as S from "./style";

import Button from "../Button";

import logo from "../../assets/dev_featival.svg";
import SwitchTheme from "../SwitchTheme";

const Header = () => {
  return (
    <S.header>
      <S.img src={logo} alt="logo dev festival" />

      <S.ul>
        <S.li>sobre</S.li>
        <S.li>
          <Button variant="outline">Quero meu ingresso!</Button>
        </S.li>
        <S.li>
          <SwitchTheme />
        </S.li>
      </S.ul>
    </S.header>
  );
};

export default Header;
