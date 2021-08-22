import styled from 'styled-components';
import { Carousel as CarouselCmp } from 'react-responsive-carousel';

import arrowRightIcon from '../../images/icons/arrow-right.svg';

export const StyledCarousel = styled(CarouselCmp)`
  position: relative;
  overflow: hidden;

  .carousel-slider {
    height: 100vh;
    overflow: hidden;

    .control-arrow {
      opacity: 0.3;
      position: absolute;
      top: 50vh;
      height: 96px;
      width: 96px;
      margin-top: -48px;
      border-radius: 50%;
      border: none;
      color: #fff;
      font-size: 26px;
      padding: 5px;
      z-index: 10;
      overflow: hidden;
      ::before {
        position: absolute;
        width: 42px;
        height: 48px;
        content: ' ';
        cursor: pointer;
        z-index: 11;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
      }
      :hover {
        opacity: 0.7;
      }
    }

    .control-prev {
      margin-left: -48px;
      ::before {
        margin: -24px 0 0 6px;
        transform: scaleX(-1);
        background-image: url(${arrowRightIcon});
      }
    }

    .control-next {
      margin-right: -48px;
      ::before {
        margin: -24px 0 0 -48px;
        background-image: url(${arrowRightIcon});
      }
      right: 0;
    }

    .slider-wrapper {
      overflow: hidden;
      height: 100vh;

      .slider {
        display: flex;
        transition: all 0.35s ease-in-out;
        height: 100vh;

        .slide {
          padding: 16px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          list-style: none;
          min-width: 100vw;
          max-width: 100vw;
        }
      }
    }
  }
`;
