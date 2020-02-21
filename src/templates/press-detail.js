import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/Article';

export default ({ data }) => {
  const detail = data.markdownRemark;
  return (
    <>
      <Article style={{ margin: '0 16px' }}>
        <h2>{detail.frontmatter.title}</h2>
        <p>Publicado el {detail.frontmatter.date}</p>
        <img
          src={require(`../data/press/${detail.frontmatter.featured}`)}
          alt={detail.frontmatter.title}
          style={{ maxWidth: '100%' }}
        />
        <p dangerouslySetInnerHTML={{ __html: detail.html }} />
      </Article>
    </>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        type
        title
        slug
        date(formatString: "DD/MM/YYYY")
        featured
      }
      rawMarkdownBody
      html
    }
  }
`;