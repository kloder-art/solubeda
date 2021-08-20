import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { store, actions } from '../../state';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import { Sidebar } from '../Sidebar';
import { Transition } from '../Transition';

import { StyledLayout } from './StyledLayout';
import { StyledMain } from './StyledMain';

const themes = {
  light: light,
  dark: dark,
};

let first = true;

export const Layout = ({ children, location, pageContext }) => {
  if (first && ['artwork', 'exhibition'].includes(pageContext.type)) {
    store.dispatch(actions.setSidebarVisibility(false));
    first = false;
  }

  const { theme, sidebar } = store.getState();
  return (
    <ThemeProvider theme={themes[theme]}>
      <Transition animationKey={sidebar}>
        <StyledLayout>
          {sidebar && <Sidebar />}
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
