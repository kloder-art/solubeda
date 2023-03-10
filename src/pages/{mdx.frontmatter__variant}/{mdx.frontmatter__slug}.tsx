import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import {
  ArtworkView,
  ArtworkFrontmatter,
  ExhibitionView,
  ExhibitionFrontmatter,
  PressView,
  PressFrontmatter,
} from '../../views';

type Payload = {
  mdx: {
    frontmatter: (
      | ArtworkFrontmatter
      | ExhibitionFrontmatter
      | PressFrontmatter
    ) & { variant: 'artworks' | 'exhibitions' | 'press' };
    body: string;
  };
};

export const VariantPage: React.FC<PageProps & { data: Payload }> = ({
  data,
}) => {
  const { frontmatter, body } = data.mdx;
  const variant = frontmatter.variant;
  return variant === 'artworks' ? (
    <ArtworkView frontmatter={frontmatter as ArtworkFrontmatter} body={body} />
  ) : variant === 'exhibitions' ? (
    <ExhibitionView
      frontmatter={frontmatter as ExhibitionFrontmatter}
      body={body}
    />
  ) : variant === 'press' ? (
    <PressView frontmatter={frontmatter as PressFrontmatter} body={body} />
  ) : null;
};

export default VariantPage;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        variant
        title
        slug
        format
        date(formatString: "DD/MM/YYYY")
        time
        year
        technic
        dimensions
        video
        location {
          title
          subtitle
          address
          map
          web
        }
        featured {
          childImageSharp {
            original {
              src
            }
          }
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
