import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { navigate } from '@reach/router';

import { SEO, List, Header, Layout } from '../../components';

type Data = {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          date: string;
          featured: string;
          title: string;
          slug: string;
        };
        body: string;
      };
    }[];
  };
};

const ExhibitionsPage: React.FC<PageProps & { data: Data }> = ({ data }) => (
  <Layout>
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
      edges {
        node {
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
  }
`;
