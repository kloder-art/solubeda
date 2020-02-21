import React from 'react';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 64px;
  justify-content: center;
  margin-bottom: 65px;
  align-items: center;
  grid-auto-flow: dense;
`;

const Gallery = (props) => (
  <StyledGallery>
    {props.children}
  </StyledGallery>
);

export default Gallery;
