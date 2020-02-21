import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  font-size: 32px;
  font-weight: 100;
  margin: 0 16px 16px;
`;

const Header = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

export default Header;

