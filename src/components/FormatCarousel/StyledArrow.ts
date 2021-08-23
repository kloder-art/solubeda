import styled, { css } from 'styled-components';

export const StyledArrow = styled.a`
  display: block;
  position: absolute;
  ${({ side }) =>
    side === 'left'
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;
        `}
  top: calc(50% - 28px);
  z-index: 10;
`;
