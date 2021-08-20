import React from 'react';

import { SEO } from './SEO';
import { Article } from './Article';

export const MdxLayout = ({ children, title }) => (
  <>
    <SEO title={title} />
    <Article>{children}</Article>
  </>
);
