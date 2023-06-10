import { styled } from "styled-components";

export const footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 5vh 15%;
`;

export const h3 = styled.h3`
  font-weight: 700;
  font-size: 3rem;
  color: ${({ theme }) => theme.text};

  transition: color 0.4s;
`;

export const container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const img = styled.img`
  width: calc(90% / 7);
  border-radius: 50%;
`;
