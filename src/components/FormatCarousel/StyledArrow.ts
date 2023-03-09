import styled, { css } from 'styled-components';

type StyledArrowProps = {
  side: 'left' | 'right';
};

export const StyledArrow = styled.div<StyledArrowProps>`
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
  cursor: pointer;
`;
