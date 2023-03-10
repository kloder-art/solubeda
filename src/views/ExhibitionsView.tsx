import * as React from 'react';

import { FormatSlideshow, FormatPlace, SEO } from '../components';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const formatMap = {
  slideshow: FormatSlideshow,
  place: FormatPlace,
};

export type ExhibitionFrontmatter = {
  format: 'slideshow' | 'place';
  title: string;
  technic: string;
  dimensions: string;
  year: string;
  video: string;
  slideshowTime: number;
  images: { image: IGatsbyImageData }[];
  location: {
    title: string;
    subtitle: string;
    map: string;
    address: string;
    web: string;
  };
};

type ExhibitionViewProps = {
  frontmatter: ExhibitionFrontmatter;
  body: string;
};

export const ExhibitionView: React.FC<ExhibitionViewProps> = ({
  frontmatter,
  body,
}) => {
  const Cmp = formatMap[frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format o unknown format for this artwork.');
  }

  return (
    <>
      <SEO title={frontmatter.title} />
      {Cmp && (
        <Cmp
          data={{ frontmatter, body }}
          images={frontmatter.images}
          returnPage="/exhibitions"
        />
      )}
    </>
  );
};
