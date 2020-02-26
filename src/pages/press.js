import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import SEO from '../components/Seo';
import List from '../components/list/List';
import Header from '../components/Header';

export default ({ data }) => (
  <>
    <SEO title="Prensa" />
    <Header>Prensa</Header>
    <List
      items={data.allMarkdownRemark.edges.map(({ node }) => {
        return {
          date: node.frontmatter.date,
          image: node.frontmatter.featured,
          title: node.frontmatter.title,
          slug: node.frontmatter.slug,
          desc: node.html,
        };
      })}
      onItemClick={slug => {
        localStorage.setItem('previous', '/press');
        navigate(`/press/${slug}/`);
      }}
    />
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "press" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            type
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
          rawMarkdownBody
          html
        }
      }
    }
  }
`;
