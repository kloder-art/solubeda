import * as React from 'react';

import { StyledArticle } from './StyledArticle';

type ArticleProps = {
  children: React.ReactNode;
};

export const Article: React.FC<ArticleProps> = ({ children }) => (
  <StyledArticle>{children}</StyledArticle>
);
