import styled from 'styled-components';

export const StyledPlace = styled.div`
  max-width: 980px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 6rem auto;
  h2 {
    font-size: 3rem;
    line-height: 4rem;
  }
  img {
    width: 100%;
  }

  @media only screen and (max-width: 980px) {
    & {
      grid-template-columns: auto;
      grid-template-rows: 1fr auto;
      margin: 2rem 0;
      padding: 1rem;
      h2 {
        font-size: 2rem;
      }
    }
  }
`;
