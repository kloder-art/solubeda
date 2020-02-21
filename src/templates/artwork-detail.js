import React from 'react';
import { graphql } from 'gatsby';

import Carousel from '../components/artwork/format/Carousel';
import Video from '../components/artwork/format/Video';
import Cube from '../components/artwork/format/Cube';
import Cam from '../components/artwork/format/Cam';

const formatMap = {
  'serie': Carousel,
  'video': Video,
  'cube': Cube,
  'cam': Cam,
};

export default ({ data }) => {
  const detail = data.markdownRemark;
  const Cmp = formatMap[detail.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format or unknown format for this artwork.');
  }
  let images = [];
  if (detail.frontmatter.images) {
    images = detail.frontmatter.images.map(item => ({
      ...item,
      path: item.path !== 'false' ? require(`../data/artwork/${item.path}`) : false
    }));
  }

  return (
    <>
      {Cmp && <Cmp data={detail} images={images} returnPage='/' />}
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
        video
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