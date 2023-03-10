import * as React from 'react';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import {
  FormatCarousel,
  FormatVideo,
  FormatCube,
  FormatCam,
} from '../components';

const formatMap = {
  serie: FormatCarousel,
  video: FormatVideo,
  cube: FormatCube,
  cam: FormatCam,
};

export type ArtworkFrontmatter = {
  format: 'serie' | 'video' | 'cube' | 'cam';
  images: { image: IGatsbyImageData; title: string }[];
  title: string;
  technic: string;
  dimensions: string;
  year: string;
  video: string;
};

type ArtworkViewProps = {
  frontmatter: ArtworkFrontmatter;
  body: string;
};

export const ArtworkView: React.FC<ArtworkViewProps> = ({
  frontmatter,
  body,
}) => {
  const Cmp = formatMap[frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format or unknown format for this artwork.');
  }

  return (
    <>
      {Cmp && (
        <Cmp
          data={{ frontmatter, body }}
          images={frontmatter.images}
          returnPage="/"
        />
      )}
    </>
  );
};
