import * as React from 'react';

import { StyledHeader } from './StyledHeader';

type HeaderProps = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);
