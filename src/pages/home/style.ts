import { styled } from "styled-components";
import { fadeLeft, fadeRight } from "../../style/animations";

export const main = styled.main`
  padding: 10vh 15%;
  display: flex;
  flex-direction: column;
  gap: 15vh;

  [data-anima] {
    opacity: 0;
    transition: transform 0.8s;
  }

  [data-anima="right"] {
    transform: translate3d(20%, 0, 0);
  }

  [data-anima="left"] {
    transform: translate3d(-20%, 0, 0);
  }

  [data-anima="bottom"] {
    transform: translate3d(0, 10vh, 0);
  }

  [data-anima].animate {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  min-height: 72vh;
  color: ${({ theme }) => theme.text};

  transition: color 0.4s;

  > img:nth-child(2) {
    animation: ${fadeLeft} 0.8s linear forwards;
  }
  > div:nth-child(1) {
    animation: ${fadeRight} 0.8s linear forwards;
  }
`;

export const container = styled.div`
  max-width: 50%;

  > img {
    position: relative;
    right: 1.5rem;
    width: 24%;
    min-height: 14vh;
  }
`;

export const img = styled.img`
  max-width: 45%;
  object-fit: contain;
  border-radius: 2.5rem;
`;

export const h1 = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  position: relative;
  bottom: 1.5rem;
  line-height: 6rem;
`;

export const h2 = styled.h2`
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 3rem;
`;

export const span = styled.span`
  color: var(--blue-1);
`;

export const p = styled.p`
  font-weight: 400;
  font-size: 1.2rem;

  margin-bottom: 1.5rem;
  max-width: 90%;
`;
