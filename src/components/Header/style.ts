import { styled } from "styled-components";

export const header = styled.header`
  background-color: var(--blue-2);
  min-height: 10vh;
  max-height: 10vh;
  color: var(--white);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 15%;
`;

export const img = styled.img`
  object-fit: contain;
  height: 8vh;
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const li = styled.li`
  text-transform: uppercase;
  font-size: 1rem;

  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--blue-1);
  }
`;
