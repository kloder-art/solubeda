import React, { useEffect } from 'react';
import { graphql } from 'gatsby';

import { store, actions } from '../state';
import Carousel from '../components/artwork/format/Carousel';
import Video from '../components/artwork/format/Video';
import Cube from '../components/artwork/format/Cube';
import Slideshow from '../components/artwork/format/Slideshow';

const formatMap = {
  'serie': Carousel,
  'video': Video,
  'cube': Cube,
  'slideshow': Slideshow,
};

export default ({ data }) => {
  const detail = data.markdownRemark;
  const Cmp = formatMap[detail.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format o unknown format for this artwork.');
  }

  let images = [];
  if (detail.frontmatter.images) {
    images = detail.frontmatter.images.map(item => (
      { ...item, path: require(`../data/exhibitions/${item.path}`) }
    ));
  }

  useEffect(() => {
    store.dispatch(actions.setSidebarVisibility(false));
  }, []);

  return (
    <>
      {Cmp && <Cmp data={detail} images={images} returnPage='/exhibitions' />}
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
          path
        }
      }
      rawMarkdownBody
      html
    }
  }
`;
