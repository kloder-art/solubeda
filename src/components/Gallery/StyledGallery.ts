import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 64px;
  justify-content: center;
  margin-bottom: 65px;
  align-items: center;
  grid-auto-flow: dense;
`;
