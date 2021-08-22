import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';
import { graphql } from 'gatsby';

import { store, actions } from '../state';
import { Gallery } from '../components/Gallery';
import { Artwork } from '../components/Artwork';

const IndexPage = ({ data }) => {
  useEffect(() => {
    store.dispatch(actions.setSidebarVisibility(true));
  }, []);

  return (
    <>
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
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { variant: { eq: "artworks" }, hidden: { eq: null } }
      }
      sort: { fields: [frontmatter___time], order: DESC }
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
                  placeholder: TRACED_SVG
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
