import React from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import { StyledArrow } from './StyledArrow';

type props = {
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  side: string;
};

export const Arrow = ({ className, style, onClick, side }: props) => (
  <StyledArrow
    className={className}
    style={{ ...style }}
    onClick={onClick}
    href={'javascript:void(0);'}
    side={side}
  >
    {side === 'left' && <VscChevronLeft size={56} />}
    {side === 'right' && <VscChevronRight size={56} />}
  </StyledArrow>
);
