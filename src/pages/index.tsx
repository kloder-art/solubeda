import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { Layout, SEO, Gallery, Artwork } from '../components';

type Payload = {
  data: {
    allMdx: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            spanX: number;
            spanY: number;
            featured: IGatsbyImageData;
            title: string;
            slug: string;
            images: { image: IGatsbyImageData }[];
            format: string;
            year: string;
          };
        };
      }[];
    };
  };
};

const IndexPage: React.FC<PageProps & Payload> = ({ data }) => {
  return (
    <Layout>
      <SEO title={'Inicio'} keywords={['sol', 'ubeda', 'art', 'almería']} />
      <Gallery>
        {data.allMdx.edges.map(({ node: { id, frontmatter } }) => (
          <Artwork
            key={id}
            spanX={frontmatter.spanX}
            spanY={frontmatter.spanY}
            featured={frontmatter.featured}
            title={frontmatter.title}
            slug={frontmatter.slug}
            images={frontmatter.images}
            format={frontmatter.format}
            year={frontmatter.year}
          />
        ))}
      </Gallery>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { variant: { eq: "artworks" }, hidden: { eq: null } }
      }
      sort: { frontmatter: { time: DESC } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            variant
            format
            time
            year
            technic
            dimensions
            featured {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            spanX
            spanY
            images {
              title
            }
          }
          body
        }
      }
    }
  }
`;
