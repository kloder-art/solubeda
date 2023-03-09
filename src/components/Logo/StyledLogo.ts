import styled, { css } from 'styled-components';

type StyledLogoProps = {
  showMenu: boolean;
};

export const StyledLogo = styled.div<StyledLogoProps>`
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

    ${(showMenu) =>
      showMenu &&
      css`
        img {
          pointer-events: all;
          opacity: 1;
        }
      `}
  }
`;
