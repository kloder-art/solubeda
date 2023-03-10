import * as React from 'react';

import { Article, Layout } from '../components';

export type PressFrontmatter = {
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

type PressViewProps = {
  frontmatter: PressFrontmatter;
  body: string;
};

export const PressView: React.FC<PressViewProps> = ({ frontmatter, body }) => (
  <Layout>
    <Article>
      <h2>{frontmatter.title}</h2>
      <p>Publicado el {frontmatter.date}</p>
      <img
        src={frontmatter.featured.childImageSharp.original.src}
        alt={frontmatter.title}
        style={{ maxWidth: '100%' }}
      />
      {body}
    </Article>
  </Layout>
);
