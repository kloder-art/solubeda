import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Footer from './Footer';

const StyledSidebar = styled.nav`
  display: grid;
  grid-template-rows: 86px auto 16px;
  grid-template-columns: 1fr;
  max-width: 280px;
  transition: all 0.25s;
  padding: 16px;

  @media (max-width: 920px) {
    width: 100vw;
    min-width: 100vw;
    pointer-events: none;

    ${(props) =>
      props.showMenu &&
      css`
        pointer-events: all;
        background-color: rgba(0, 0, 0, 0.7);
      `}
  }

  height: 100vh;
  box-sizing: border-box;
  position: absolute;

  z-index: 100;
  flex-direction: column;
  justify-content: space-between;
`;

const Sidebar = (props) => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  return (
    <StyledSidebar
      showMenu={isMenuVisible}
      onClick={() => isMenuVisible && setMenuVisibility(false)}
    >
      <Logo
        showMenu={isMenuVisible}
        onClick={() => setMenuVisibility(!isMenuVisible)}
      />
      <Menu
        location={props.location}
        showMenu={isMenuVisible}
        onClick={() => setMenuVisibility(false)}
      />
      <Footer showMenu={isMenuVisible} />
    </StyledSidebar>
  );
};

export default Sidebar;
