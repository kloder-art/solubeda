import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const StyledList = styled.ul`
  margin: 0 16px;
`;

const List = (props) => {
  return (
    <StyledList>
      {props.items.map((item, idx) => (
        <ListItem
          key={idx}
          {...item}
          parseImgFn={props.parseImgFn}
          onItemClick={props.onItemClick}
        />
      ))}
    </StyledList>
  );
};

export default List;
