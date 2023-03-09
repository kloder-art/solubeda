import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Article, Layout } from '../../components';

type Data = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
      featured: {
        childImageSharp: {
          original: {
            src: string;
          };
        };
      };
    };
    body: string;
  };
};

const PressPage: React.FC<PageProps & { data: Data }> = ({ data: { mdx } }) => (
  <Layout>
    <Article>
      <h2>{mdx.frontmatter.title}</h2>
      <p>Publicado el {mdx.frontmatter.date}</p>
      <img
        src={mdx.frontmatter.featured.childImageSharp.original.src}
        alt={mdx.frontmatter.title}
        style={{ maxWidth: '100%' }}
      />
      {mdx.body}
    </Article>
  </Layout>
);

export default PressPage;

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
