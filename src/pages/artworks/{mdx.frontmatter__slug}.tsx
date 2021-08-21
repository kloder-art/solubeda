import React from 'react';
import { graphql } from 'gatsby';

import Carousel from '../../components/artwork/format/Carousel';
import Video from '../../components/artwork/format/Video';
import { FormatCube } from '../../components/FormatCube';
import Cam from '../../components/artwork/format/Cam';

const formatMap = {
  serie: Carousel,
  video: Video,
  cube: FormatCube,
  cam: Cam,
};

const ArtworkPage = ({ data: { mdx } }) => {
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
                placeholder: BLURRED
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
