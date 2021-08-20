import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { store, actions } from '../state';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import { Sidebar } from './Sidebar';
import Transition from './Transition';

const StyledLayout = styled.div`
  background: ${(props) => props.theme.bg};
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const StyledMain = styled.main`
  overflow: hidden;
  overflow-y: auto;

  ${(props) =>
    props.sidebar &&
    css`
      padding-top: 32px;
      @media (max-width: 920px) {
        /* padding-top: 128px; */
      }
    `}

  @media (min-width: 920px) {
    width: ${(props) => (!props.sidebar ? '100vw' : 'calc(100vw - 280px)')};
    margin-left: ${(props) => (!props.sidebar ? '0' : '280px')};
  }
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: lightgrey;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: darkgrey;
  }
`;

const themes = {
  light: light,
  dark: dark,
};

let first = true;

const Layout = ({ children, location, pageContext }) => {
  if (first && ['artwork', 'exhibition'].includes(pageContext.type)) {
    store.dispatch(actions.setSidebarVisibility(false));
    first = false;
  }

  const { theme, sidebar } = store.getState();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Transition animationKey={sidebar}>
        <StyledLayout>
          {sidebar && <Sidebar location={location} />}
          <StyledMain sidebar={sidebar}>
            <Transition animationKey={location.pathname}>{children}</Transition>
          </StyledMain>
        </StyledLayout>
      </Transition>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
