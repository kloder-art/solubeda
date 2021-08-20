import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { graphql } from 'gatsby';

import { store, actions } from '../state';
import Gallery from '../components/artwork/gallery';
import Artwork from '../components/artwork/artwork';

const IndexPage = ({ data }) => {
  const [selected, setSelected] = useState(null);

  const items = data.allMdx.edges.map((item, idx) => (
    <Artwork
      key={idx}
      // onClick={() => selected === null && setSelected(idx)}
      onClick={() => (selected === null ? setSelected(idx) : setSelected(null))}
      selected={selected === idx}
      selectedMode={selected !== null}
      html={item.node.body}
      {...item.node.frontmatter}
    />
  ));

  useEffect(() => {
    store.dispatch(actions.setSidebarVisibility(true));
  }, []);

  return (
    <>
      <SEO title="Inicio" keywords={['sol', 'ubeda', 'art', 'almería']} />
      <Gallery breakpointCols={selected === null ? 3 : 1} selected={selected}>
        {items}
      </Gallery>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { variant: { eq: "artworks" }, hidden: { eq: null } } }
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
            hidden
            time
            year
            technic
            dimensions
            featured {
              childImageSharp {
                original {
                  src
                }
              }
            }
            spanX
            spanY
            images {
              title
              year
              dimensions
              image {
                childImageSharp {
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
    }
  }
`;
