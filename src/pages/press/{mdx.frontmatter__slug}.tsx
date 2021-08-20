import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Article from '../../components/Article';

export default ({ data: { mdx } }) => (
  <Article style={{ margin: '0 16px' }}>
    <h2>{mdx.frontmatter.title}</h2>
    <p>Publicado el {mdx.frontmatter.date}</p>
    <img
      src={mdx.frontmatter.featured.childImageSharp.original.src}
      alt={mdx.frontmatter.title}
      style={{ maxWidth: '100%' }}
    />
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </Article>
);

export const query = graphql`
  query ($frontmatter__slug: String!) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
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
      body
    }
  }
`;
