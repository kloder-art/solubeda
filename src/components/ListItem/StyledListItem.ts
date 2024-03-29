import styled from 'styled-components';

type StyledListItemProps = {
  imagePath: string;
};

export const StyledListItem = styled.li<StyledListItemProps>`
  cursor: pointer;
  position: relative;
  height: 200px;
  width: 100%;
  background-image: url(${({ imagePath }) => imagePath});
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
