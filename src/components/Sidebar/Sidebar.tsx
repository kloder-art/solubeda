import * as React from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';
import { Footer } from '../Footer';

import { StyledSidebar } from './StyledSidebar';

export const Sidebar = () => {
  const [isMenuVisible, setMenuVisibility] = React.useState(false);
  return (
    <StyledSidebar
      showMenu={isMenuVisible}
      onClick={() => isMenuVisible && setMenuVisibility(false)}
    >
      <Logo
        showMenu={isMenuVisible}
        onClick={() => setMenuVisibility(!isMenuVisible)}
      />
      <Menu showMenu={isMenuVisible} onClick={() => setMenuVisibility(false)} />
      <Footer showMenu={isMenuVisible} />
    </StyledSidebar>
  );
};

export default Sidebar;
