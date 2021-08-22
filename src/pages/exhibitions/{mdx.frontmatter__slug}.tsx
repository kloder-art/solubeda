import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { store, actions } from '../../state';
import { FormatCarousel } from '../../components/FormatCarousel';
import { FormatVideo } from '../../components/FormatVideo';
import { FormatCube } from '../../components/FormatCube';
import { FormatSlideshow } from '../../components/FormatSlideshow';
import { FormatPlace } from '../../components/FormatPlace';
import { SEO } from '../../components/SEO';

const formatMap = {
  serie: FormatCarousel,
  video: FormatVideo,
  cube: FormatCube,
  slideshow: FormatSlideshow,
  place: FormatPlace,
};

export default ({ data: { mdx } }) => {
  const Cmp = formatMap[mdx.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format o unknown format for this artwork.');
  }

  useEffect(() => {
    store.dispatch(actions.setSidebarVisibility(false));
  }, []);

  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      {Cmp && (
        <Cmp
          data={mdx}
          images={mdx.frontmatter.images}
          returnPage="/exhibitions"
        />
      )}
    </>
  );
};

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
        location {
          title
          subtitle
          address
          map
          web
        }
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
