import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { store, actions } from '../state';
import Carousel from '../components/artwork/format/Carousel';
import Video from '../components/artwork/format/Video';
import Cube from '../components/artwork/format/Cube';
import Slideshow from '../components/artwork/format/Slideshow';
import SEO from '../components/Seo';

const formatMap = {
  serie: Carousel,
  video: Video,
  cube: Cube,
  slideshow: Slideshow,
};

export default ({ data }) => {
  const detail = data.markdownRemark;
  const Cmp = formatMap[detail.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format o unknown format for this artwork.');
  }

  useEffect(() => {
    store.dispatch(actions.setSidebarVisibility(false));
  }, []);

  return (
    <>
      <SEO title={detail.frontmatter.title} />
      {Cmp && (
        <Cmp
          data={detail}
          images={detail.frontmatter.images}
          returnPage="/exhibitions"
        />
      )}
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        type
        format
        time
        year
        technic
        dimensions
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
      rawMarkdownBody
      html
    }
  }
`;
