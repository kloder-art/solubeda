import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { store, actions } from '../../state';
import filmIcon from '../../images/icons/film.svg';
import cubeIcon from '../../images/icons/cube.svg';
import camIcon from '../../images/icons/cam.svg';

const StyledArtwork = styled.div`
  cursor: pointer;
  text-align: center;

  @media (min-width: 920px) {
    grid-row-end: span ${props => (props.spanY ? props.spanY : 1)};
    grid-column-end: span ${props => (props.spanX ? props.spanX : 1)};
  }

  img {
    max-width: 100%;
    max-height: ${props => `${(props.spanY ? props.spanY : 1) * 300}px`};
    /* max-height: 300px; */
    transition: box-shadow 0.4s;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    :hover {
      box-shadow: 0 16px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const StyledArtworkInfo = styled.div`
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

const goToDetail = slug => {
  store.dispatch(actions.setSidebarVisibility(false));
  navigate(`/artwork/${slug}/`);
};

const ArtWork = props => (
  <StyledArtwork {...props}>
    <img
      src={props.featured.childImageSharp.original.src}
      alt={`${props.title} imagen`}
      onClick={() => goToDetail(props.slug)}
    />
    <StyledArtworkInfo>
      {props.format === 'serie' && (
        <div className={'total'}>{props.images.length}</div>
      )}
      {props.format === 'video' && <div className={'video'} />}
      {props.format === 'cube' && <div className={'cube'} />}
      {props.format === 'cam' && <div className={'cam'} />}
      <div className={'info'}>
        <span className={'title'}>{props.title || 'Sin título'}</span>
        <span className={'year'}>{props.year}</span>
      </div>
    </StyledArtworkInfo>
  </StyledArtwork>
);

export default ArtWork;
