import styled, { css } from 'styled-components';

export const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 12px;
  @media (max-width: 920px) {
    opacity: 0;
    pointer-events: none;
    ${({ showMenu }) => showMenu && css`
      color: white;
      pointer-events: all;
      opacity: 1;
    `}
  }
`;
