import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import { store, actions } from '../../state';
import { SEO } from '../../components/SEO';
import List from '../../components/list/List';
import Header from '../../components/Header';

const ExhibitionsPage = ({ data }) => {
  return (
    <>
      <SEO title="Exposiciones" />
      <Header>Exposiciones</Header>
      <List
        items={data.allMdx.edges.map(({ node }) => {
          return {
            date: node.frontmatter.date,
            image: node.frontmatter.featured,
            title: node.frontmatter.title,
            slug: node.frontmatter.slug,
            desc: node.body,
          };
        })}
        onItemClick={slug => {
          store.dispatch(actions.setSidebarVisibility(false));
          navigate(`/exhibitions/${slug}/`);
        }}
      />
    </>
  );
};

export default ExhibitionsPage;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { variant: { eq: "exhibitions" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD/MM/YYYY")
            format
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
