import * as React from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import { StyledArrow } from './StyledArrow';

type props = {
  className?: string;
  style?: any;
  onClick?: React.DOMAttributes<HTMLDivElement>['onClick'];
  side: 'left' | 'right';
};

export const Arrow = ({ className, style, onClick, side }: props) => (
  <StyledArrow
    className={className}
    style={{ ...style }}
    onClick={onClick}
    side={side}
  >
    {side === 'left' && <VscChevronLeft size={56} />}
    {side === 'right' && <VscChevronRight size={56} />}
  </StyledArrow>
);
