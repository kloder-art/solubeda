import * as React from 'react';

import { StyledLayout } from './StyledLayout';
import { StyledMain } from './StyledMain';
import { Sidebar } from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode;
  withSidebar?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({
  children,
  withSidebar = true,
}) => {
  return (
    <StyledLayout>
      {withSidebar && <Sidebar />}
      <StyledMain sidebar={withSidebar}>{children}</StyledMain>
    </StyledLayout>
  );
};
