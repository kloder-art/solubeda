import React from 'react';
import { graphql } from 'gatsby';

import Carousel from '../../components/artwork/format/Carousel';
import Video from '../../components/artwork/format/Video';
import Cube from '../../components/artwork/format/Cube';
import Cam from '../../components/artwork/format/Cam';

const formatMap = {
  serie: Carousel,
  video: Video,
  cube: Cube,
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
  query ($frontmatter__slug: String!) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      id
      frontmatter {
        title
        type
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
              original {
                src
              }
            }
          }
        }
      }
      body
    }
  }
`;
