import styled, { css } from 'styled-components';

export const StyledSidebar = styled.nav`
  display: grid;
  grid-template-rows: 86px auto 16px;
  grid-template-columns: 1fr;
  max-width: 280px;
  transition: all 0.25s;
  padding: 16px;

  @media (max-width: 920px) {
    width: 100vw;
    min-width: 100vw;
    pointer-events: none;

    ${({showMenu}) => showMenu && css`
      pointer-events: all;
      background-color: rgba(0, 0, 0, 0.7);
    `}
  }

  height: 100vh;
  box-sizing: border-box;
  position: absolute;

  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
`;
