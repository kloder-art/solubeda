import React from 'react';

import { ListItem } from '../ListItem';
import { StyledList } from './StyledItem';

export const List = ({ items, onItemClick }) => (
  <StyledList>
    {items.map((item, idx: number) => (
      <ListItem key={idx} {...item} onItemClick={onItemClick} />
    ))}
  </StyledList>
);
