import * as React from 'react';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { FiBox, FiFilm, FiCamera } from 'react-icons/fi';

import { StyledArtwork } from './StyledArtwork';
import { StyledArtworkInfo } from './StyledArtworkInfo';

const goToDetail = (slug: string) => {
  navigate(`/artworks/${slug}/`);
};

type ArtworkProps = {
  spanY: number;
  spanX: number;
  featured: IGatsbyImageData;
  title: string;
  slug: string;
  images: unknown[];
  format: string;
  year: string;
};

export const Artwork: React.FC<ArtworkProps> = ({
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
    <div
      onClick={() => {
        goToDetail(slug);
      }}
    >
      <GatsbyImage
        image={getImage(featured) as IGatsbyImageData}
        alt={`${title} imagen`}
      />
    </div>
    <StyledArtworkInfo
      onClick={() => {
        goToDetail(slug);
      }}
    >
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
