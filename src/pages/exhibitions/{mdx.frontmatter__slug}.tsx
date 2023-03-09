import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import {
  FormatCarousel,
  FormatVideo,
  FormatCube,
  FormatSlideshow,
  FormatPlace,
  SEO,
} from '../../components';
import { IGatsbyImageData } from 'gatsby-plugin-image';

const formatMap = {
  slideshow: FormatSlideshow,
  place: FormatPlace,
};

type Payload = {
  data: {
    mdx: {
      frontmatter: {
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
      body: string;
    };
  };
};

const ExhibitionPage: React.FC<PageProps & Payload> = ({ data: { mdx } }) => {
  const Cmp = formatMap[mdx.frontmatter.format];
  if (!Cmp) {
    console.error('Undefined format o unknown format for this artwork.');
  }

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

export default ExhibitionPage;

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
