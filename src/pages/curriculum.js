import React from 'react';
import SEO from '../components/Seo';
import { graphql } from 'gatsby';

import Header from '../components/Header';
import Timeline from '../components/curriculum/Timeline';

const CurriculumPage = ({ data }) => {
  const intro = data.allMarkdownRemark.edges
    .filter(item => !item.node.frontmatter.year)[0];
  const items = data.allMarkdownRemark.edges
    .filter(item => item.node.frontmatter.year);
  return (
    <>
      <SEO title={'Curriculum'} keywords={['sol', 'ubeda', 'cv', 'curriculum']} />
      <Header>Curriculum</Header>
      <Timeline intro={intro} items={items} />
    </>
  );
};

export default CurriculumPage;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "curriculum" } } }
      sort: {
        fields: [frontmatter___year]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            type
            year
          }
          rawMarkdownBody
          html
        }
      }
    }
  }
`;