import styled from 'styled-components';

export const StyledVideo = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);

  iframe,
  object,
  embed {
    grid-column: 2 / 6;
    grid-row: 2 / 5;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    border: 0;
  }
`;
