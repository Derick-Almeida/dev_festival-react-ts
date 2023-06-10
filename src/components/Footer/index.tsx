import * as S from "./style";

import artist_1 from "../../assets/artist_1_small.svg";
import artist_2 from "../../assets/artist_2_small.svg";
import artist_3 from "../../assets/artist_3_small.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

const Footer = () => {
  const { themeColor } = useContext(ThemeContext);

  const data = [artist_1, artist_2, artist_3, artist_1, artist_2, artist_3, artist_1];

  return (
    <S.footer>
      <S.h3 theme={{ ...themeColor }}>Artistas</S.h3>

      <S.container>
        {data.map((img, index) => (
          <S.img src={img} alt="artist's photo" key={index} />
        ))}
      </S.container>
    </S.footer>
  );
};

export default Footer;
