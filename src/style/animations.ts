import { keyframes } from "styled-components";

export const fadeLeft = keyframes`
  from {
    transform: translateX(20%);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fadeRight = keyframes`
  from {
    transform: translateX(-20%);
    opacity: 0;
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const fade = keyframes` 
  from{
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;
