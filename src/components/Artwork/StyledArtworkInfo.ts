import styled from 'styled-components';

export const StyledArtworkInfo = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  .total {
    background: white;
    min-width: 32px;
    height: 32px;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    margin-right: 8px;
  }

  .info {
    text-align: left;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 16px;
    }
    .year {
      font-size: 12px;
    }
  }
`;
