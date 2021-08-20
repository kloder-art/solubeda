import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import { SEO } from '../../components/SEO';
import List from '../../components/list/List';
import Header from '../../components/Header';

const PressPage = ({ data: { allMdx } }) => (
  <>
    <SEO title="Prensa" />
    <Header>Prensa</Header>
    <List
      items={allMdx.edges.map(({ node }) => {
        return {
          date: node.frontmatter.date,
          image: node.frontmatter.featured,
          title: node.frontmatter.title,
          slug: node.frontmatter.slug,
        };
      })}
      onItemClick={(slug) => {
        localStorage.setItem('previous', '/press');
        navigate(`/press/${slug}/`);
      }}
    />
  </>
);

export default PressPage;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { variant: { eq: "press" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD/MM/YYYY")
            featured {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
