import * as S from "./style";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

import Button from "../../components/Button";
import Footer from "../../components/Footer";

import devDuck from "../../assets/pato_dev.svg";
import artist_1 from "../../assets/artist_1_big.svg";
import artist_2 from "../../assets/artist_2_big.svg";
import { Link } from "react-router-dom";

const Home = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    setShowContent(true);

    const animaScroll = () => {
      const windowHeight = window.scrollY + (window.innerHeight * 3.6) / 4;
      const elements = document.querySelectorAll("[data-anima]");

      elements.forEach((elem) => {
        if (elem instanceof HTMLElement) {
          if (windowHeight > elem.offsetTop) {
            elem.classList.add("animate");
          }
        }
      });
    };

    window.addEventListener("scroll", animaScroll);

    return () => window.removeEventListener("scroll", animaScroll);
  }, []);

  return (
    <>
      {showContent && (
        <S.main>
          <S.section theme={{ ...themeColor }}>
            <S.container>
              <S.img src={devDuck} alt="dev duck" />
              <S.h1>
                <S.span>&lt;Dev/&gt;</S.span> Festival
              </S.h1>
              <Button variant="filled">
                <Link to="/payment">Quero meu ingresso!</Link>
              </Button>
            </S.container>

            <S.img src={artist_2} alt="artist's photo" />
          </S.section>

          <S.section theme={{ ...themeColor }}>
            <S.img src={artist_1} alt="artist's photo" data-anima="left" />

            <S.container data-anima="right">
              <S.h2>Sobre o festival</S.h2>
              <S.p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus diam gravida
                iaculis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </S.p>
              <S.p>
                Aliquam tempus diam gravida iaculis vestibulum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </S.p>
            </S.container>
          </S.section>

          <Footer />
        </S.main>
      )}
    </>
  );
};

export default Home;
