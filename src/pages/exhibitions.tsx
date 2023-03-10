import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { navigate } from '@reach/router';

import { SEO, List, Header, Layout } from '../components';

type Data = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        featured: string;
        title: string;
        slug: string;
      };
      body: string;
    }[];
  };
};

const ExhibitionsPage: React.FC<PageProps & { data: Data }> = ({ data }) => (
  <Layout>
    <SEO title="Exposiciones" />
    <Header>Exposiciones</Header>
    <List
      items={data.allMdx.nodes.map(({ frontmatter, body }) => {
        return {
          date: frontmatter.date,
          image: frontmatter.featured,
          title: frontmatter.title,
          slug: frontmatter.slug,
          desc: body,
        };
      })}
      onItemClick={(slug: string) => {
        navigate(`/exhibitions/${slug}/`);
      }}
    />
  </Layout>
);

export default ExhibitionsPage;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { variant: { eq: "exhibitions" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "DD/MM/YYYY")
          format
          featured {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        body
      }
    }
  }
`;
