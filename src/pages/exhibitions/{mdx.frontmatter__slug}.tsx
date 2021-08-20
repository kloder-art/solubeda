import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { store, actions } from '../../state';
import Carousel from '../../components/artwork/format/Carousel';
import Video from '../../components/artwork/format/Video';
import Cube from '../../components/artwork/format/Cube';
import Slideshow from '../../components/artwork/format/Slideshow';
import Place from '../../components/artwork/format/Place';
import { SEO } from '../../components/SEO';

const formatMap = {
  serie: Carousel,
  video: Video,
  cube: Cube,
  slideshow: Slideshow,
  place: Place,
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
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
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
