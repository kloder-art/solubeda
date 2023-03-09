import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import {
  FormatCarousel,
  FormatVideo,
  FormatCube,
  FormatCam,
} from '../../components';

const formatMap = {
  serie: FormatCarousel,
  video: FormatVideo,
  cube: FormatCube,
  cam: FormatCam,
};

type ArtworkFrontmatter = {
  format: 'serie' | 'video' | 'cube' | 'cam';
  images: { image: IGatsbyImageData; title: string }[];
  title: string;
  technic: string;
  dimensions: string;
  year: string;
  video: string;
};

type Data = {
  mdx: {
    frontmatter: ArtworkFrontmatter;
    body: string;
  };
};

const ArtworkPage: React.FC<PageProps & { data: Data }> = ({
  data: { mdx },
}) => {
  const Cmp = formatMap[mdx.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format or unknown format for this artwork.');
  }

  return (
    <>
      {Cmp && <Cmp data={mdx} images={mdx.frontmatter.images} returnPage="/" />}
    </>
  );
};

export default ArtworkPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        format
        time
        year
        technic
        dimensions
        video
        images {
          title
          year
          dimensions
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      body
    }
  }
`;
