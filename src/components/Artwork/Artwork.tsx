import React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { FiBox, FiFilm, FiCamera } from 'react-icons/fi';

import { store, actions } from '../../state';
import { StyledArtwork } from './StyledArtwork';
import { StyledArtworkInfo } from './StyledArtworkInfo';

const goToDetail = (slug: string) => {
  store.dispatch(actions.setSidebarVisibility(false));
  navigate(`/artworks/${slug}/`);
};

export const Artwork = ({
  spanY,
  spanX,
  featured,
  title,
  slug,
  images,
  format,
  year,
}) => (
  <StyledArtwork spanX={spanX} spanY={spanY}>
    <GatsbyImage
      image={getImage(featured)}
      alt={`${title} imagen`}
      onClick={() => goToDetail(slug)}
    />
    <StyledArtworkInfo onClick={() => goToDetail(slug)}>
      {format === 'serie' && <div className={'total'}>{images.length}</div>}
      {format === 'video' && (
        <FiFilm size={32} style={{ marginRight: '8px' }} />
      )}
      {format === 'cube' && <FiBox size={32} style={{ marginRight: '8px' }} />}
      {format === 'cam' && (
        <FiCamera size={32} style={{ marginRight: '8px' }} />
      )}
      <div className={'info'}>
        <span className={'title'}>{title || 'Sin título'}</span>
        <span className={'year'}>{year}</span>
      </div>
    </StyledArtworkInfo>
  </StyledArtwork>
);
