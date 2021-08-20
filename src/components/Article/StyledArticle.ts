import styled from 'styled-components';

export const StyledArticle = styled.div`
  margin: 0 16px 64px;
  @media (max-width: 920px) {
    margin: 0 16px 64px;
  }

  max-width: 100%;
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  h3 {
    font-size: 28px;
    margin-bottom: 8px;
  }
  h4 {
    font-size: 22px;
    margin-bottom: 8px;
  }
  strong,
  b {
    font-weight: bold;
  }

  p {
    margin: 0 0 16px;
  }

  li {
    list-style-type: disc;
    margin: 0 0 18px 18px;
  }

  img {
    margin-bottom: 16px;
  }
`;
