import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import { store, actions } from '../state';
import SEO from '../components/Seo';
import List from '../components/list/List';
import Header from '../components/Header';

const ExhibitionsPage = ({ data }) => {
  
  return (
    <>
      <SEO title="Exposiciones" />
      <Header>Exposiciones</Header>
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
        parseImgFn={(img) => require(`../data/exhibitions/${img}`)}
        onItemClick={(slug) => {
          store.dispatch(actions.setSidebarVisibility(false));
          navigate(`/exhibition/${slug}/`);
        }}
      />
    </>
  );
};

export default ExhibitionsPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "exhibition" } } }
      sort: {
        fields: [frontmatter___time]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD/MM/YYYY")
            type
            format
            time
            year
            technic
            dimensions
            featured
            spanX
            spanY
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
    }
  }
`;