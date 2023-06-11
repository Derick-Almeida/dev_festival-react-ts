import { css, styled } from "styled-components";
import { IButtonProps } from "./type";

export const button = styled.button<IButtonProps>`
  border-radius: 2rem;
  padding: 0.5rem 1rem;

  font-weight: 700;
  font-size: 1rem;

  transition: color 0.4s, background-color 0.4s, border-color 0.4s;

  ${({ variant }) => {
    switch (variant) {
      case "filled":
        return css`
          border: 0.15rem solid var(--blue-1);
          background-color: var(--blue-1);
          color: var(--white);

          &:hover {
            border-color: var(--purple);
            background-color: var(--purple);
          }
        `;

      case "outline":
        return css`
          border: 0.15rem solid var(--purple);
          background-color: transparent;
          color: var(--purple);

          &:hover {
            border-color: var(--blue-1);
            color: var(--blue-1);
          }
        `;
    }
  }}
`;
