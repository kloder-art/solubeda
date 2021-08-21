import styled from 'styled-components';

import filmIcon from '../../images/icons/film.svg';
import cubeIcon from '../../images/icons/cube.svg';
import camIcon from '../../images/icons/cam.svg';

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

  .video {
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    background-image: url(${filmIcon});
  }

  .cube {
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    background-image: url(${cubeIcon});
  }

  .cam {
    min-width: 32px;
    height: 32px;
    margin-right: 8px;
    background-image: url(${camIcon});
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
