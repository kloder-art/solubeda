import * as React from 'react';

import { SEO } from '../SEO';
import { Article } from '../Article';

type MdxLayoutProps = {
  children: React.ReactNode;
  title: string;
};
export const MdxLayout: React.FC<MdxLayoutProps> = ({ children, title }) => (
  <>
    <SEO title={title} />
    <Article>{children}</Article>
  </>
);
