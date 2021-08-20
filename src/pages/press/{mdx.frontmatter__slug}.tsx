import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Article } from '../../components/Article';

export default ({ data: { mdx } }) => (
  <Article>
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
  query ($id: String) {
    mdx(id: { eq: $id }) {
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
