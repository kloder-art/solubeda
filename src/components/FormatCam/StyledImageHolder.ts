import styled from 'styled-components';

export const StyledImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);

  .gatsby-image-wrapper {
    max-height: 80vh;
    max-width: 90vw;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;
