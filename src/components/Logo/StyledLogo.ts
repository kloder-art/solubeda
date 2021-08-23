import styled, { css } from 'styled-components';

export const StyledLogo = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  img {
    cursor: pointer;
  }
  h1 {
    display: none;
  }

  @media (max-width: 920px) {
    img {
      opacity: 0;
      pointer-events: none;
    }

    ${(showMenu: boolean) =>
      showMenu &&
      css`
        img {
          pointer-events: all;
          opacity: 1;
        }
      `}
  }
`;
