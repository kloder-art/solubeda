import styled, { css } from 'styled-components';

type StyledBtnMenuProps = {
  showMenu: boolean;
};

export const StyledBtnMenu = styled.div<StyledBtnMenuProps>`
  align-self: flex-start;
  justify-self: right;
  pointer-events: all;
  @media (min-width: 920px) {
    display: none;
  }

  ${({ showMenu }) =>
    showMenu &&
    css`
      color: white;
    `}
`;
