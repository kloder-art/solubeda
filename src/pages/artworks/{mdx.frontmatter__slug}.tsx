import React from 'react';
import { graphql } from 'gatsby';

import { FormatCarousel } from '../../components/FormatCarousel';
import { FormatVideo } from '../../components/FormatVideo';
import { FormatCube } from '../../components/FormatCube';
import { FormatCam } from '../../components/FormatCam';

const formatMap = {
  serie: FormatCarousel,
  video: FormatVideo,
  cube: FormatCube,
  cam: FormatCam,
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
                placeholder: TRACED_SVG
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
