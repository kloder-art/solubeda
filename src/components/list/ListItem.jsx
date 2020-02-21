import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  cursor: pointer;
  position: relative;
  height: 200px;
  width: 100%;
  background-image: url(${props => props.imagePath});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .title {
    .date {
      position: absolute;
      background: black;
      margin-top: -38px;
      padding: 8px 16px;
      left: 0;
      font-size: 18px;
      @media (max-width: 560px) {
        font-size: 14px;
      }
    }
    position: absolute;
    background: black;
    padding: 8px 16px;
    color: white;
    bottom: 8px;
    left: 8px;
    font-size: 24px;
    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
  margin-bottom: 32px;
`;

const ListItem = (props) => {
  const imagePath = props.parseImgFn(props.image);
  return (
    <StyledListItem
      imagePath={imagePath}
      onClick={() => props.onItemClick(props.slug)}
    >
      <div className={'title'}>
        {props.date && <div className={'date'}>{props.date}</div>}
        {props.title}
      </div>
    </StyledListItem>
  );
};

export default ListItem;
