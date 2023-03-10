import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { navigate } from '@reach/router';

import { SEO, List, Header, Layout } from '../components';

type Data = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string;
        date: string;
        featured: string;
        slug: string;
      };
    }[];
  };
};

const PressPage: React.FC<PageProps & { data: Data }> = ({
  data: { allMdx },
}) => (
  <Layout>
    <SEO title="Prensa" />
    <Header>Prensa</Header>
    <List
      items={allMdx.nodes.map(({ frontmatter }) => {
        return {
          date: frontmatter.date,
          image: frontmatter.featured,
          title: frontmatter.title,
          slug: frontmatter.slug,
        };
      })}
      onItemClick={(slug: string) => {
        localStorage.setItem('previous', '/press');
        navigate(`/press/${slug}/`);
      }}
    />
  </Layout>
);

export default PressPage;

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { variant: { eq: "press" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "DD/MM/YYYY")
          featured {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
