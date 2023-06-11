import { styled } from "styled-components";
import { fade } from "../../style/animations";

export const button = styled.button`
  border: none;
  border-radius: 50%;
  background: none;

  color: inherit;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    animation: ${fade} 0.5s linear forwards;
  }
`;
