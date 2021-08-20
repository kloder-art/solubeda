import React from 'react';
import PropTypes from 'prop-types';

import { StyledArticle } from './StyledArticle';

export const Article = ({ children }) => (
  <StyledArticle>{children}</StyledArticle>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};
