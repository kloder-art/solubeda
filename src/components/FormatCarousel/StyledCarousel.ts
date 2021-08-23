import styled from 'styled-components';

export const StyledCarousel = styled.div`
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

        div.slick-content {
          display: grid;
          grid-template-rows: auto 80px;
          height: 100vh;
          div.gatsby-image-wrapper {
            text-align: center;
            max-width: 100%;
          }
          div.info {
            padding: 16px;
            display: flex;
            justify-content: space-between;
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
          }
        }
      }
    }
  }
`;
