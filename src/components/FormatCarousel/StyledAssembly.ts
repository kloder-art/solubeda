import styled from 'styled-components';

export const StyledAssembly = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-height: 80vh;
    max-width: 90vw;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .serie {
      font-weight: bold;
    }
    .year {
      font-size: 12px;
    }
    .right-side {
      text-align: right;
    }
  }
`;
