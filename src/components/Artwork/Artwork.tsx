import React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

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
  year
}) => (
  <StyledArtwork spanX={spanX} spanY={spanY}>
    <GatsbyImage
      image={getImage(featured)}
      alt={`${title} imagen`}
      onClick={() => goToDetail(slug)}
    />
    <StyledArtworkInfo onClick={() => goToDetail(slug)}>
      {format === 'serie' && (
        <div className={'total'}>{images.length}</div>
      )}
      {format === 'video' && <div className={'video'} />}
      {format === 'cube' && <div className={'cube'} />}
      {format === 'cam' && <div className={'cam'} />}
      <div className={'info'}>
        <span className={'title'}>{title || 'Sin título'}</span>
        <span className={'year'}>{year}</span>
      </div>
    </StyledArtworkInfo>
  </StyledArtwork>
);
