import * as React from 'react';

import { ListItem } from '../ListItem';
import { StyledList } from './StyledItem';

type ListProps = {
  items: { [key: string]: unknown }[];
  onItemClick?: (slug: string) => void;
};

export const List: React.FC<ListProps> = ({ items, onItemClick }) => (
  <StyledList>
    {items.map((item, idx: number) => (
      <ListItem key={idx} {...item} onItemClick={onItemClick} />
    ))}
  </StyledList>
);
