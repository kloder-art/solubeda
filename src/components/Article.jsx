import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledArticle = styled.div`
  margin: 0 16px 64px;
  @media (max-width: 920px) {
    margin: 0 16px 64px;
  }

  max-width: 100%;
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
  }
  strong, b {
    font-weight: bold;
  }

  p { margin: 0 0 8px; }

  li {
    list-style-type: disc;
    margin: 0 0 18px 18px;
  }

  img {
    margin-bottom: 16px;
  }
`;

const Article = (props) => (
  <StyledArticle>
    {props.children}
  </StyledArticle>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
