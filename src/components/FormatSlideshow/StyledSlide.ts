import styled from 'styled-components';

export const StyledSlide = styled.div`
  height: 100vh;
  overflow: hidden;
  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: relative;
    display: block;
    .slick-track {
      .slick-slide {
        display: block;
        float: left;
        height: 100vh;
        min-height: 1px;
        div {
          height: 100%;
          div {
            height: 100%;
            display: grid !important;
            align-items: center;
            justify-items: center;
            img {
              max-width: 100%;
              box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            }
          }
        }
      }
    }
  }
`;
