import * as S from "./style";

import Button from "../Button";

import logo from "../../assets/dev_featival.svg";
import SwitchTheme from "../SwitchTheme";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.header>
      <S.img src={logo} alt="logo dev festival" />

      <S.ul>
        <S.li>
          <Link to="/">sobre</Link>
        </S.li>
        <S.li>
          <Link to="payment">
            <Button variant="outline">Quero meu ingresso!</Button>
          </Link>
        </S.li>
        <S.li>
          <SwitchTheme />
        </S.li>
      </S.ul>
    </S.header>
  );
};

export default Header;
