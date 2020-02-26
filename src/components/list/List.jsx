import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const StyledList = styled.ul`
  margin: 0 16px;
`;

const List = ({ items, onItemClick }) => (
  <StyledList>
    {items.map((item, idx) => (
      <ListItem key={idx} {...item} onItemClick={onItemClick} />
    ))}
  </StyledList>
);

export default List;
