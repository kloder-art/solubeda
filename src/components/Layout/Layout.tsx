import React from 'react';
import PropTypes from 'prop-types';

import { store, actions } from '../../state';

import { Sidebar } from '../Sidebar';
import { Transition } from '../Transition';

import { StyledLayout } from './StyledLayout';
import { StyledMain } from './StyledMain';

let first = true;

export const Layout = ({ children, location, pageContext }) => {
  if (first && ['artwork', 'exhibition'].includes(pageContext.type)) {
    store.dispatch(actions.setSidebarVisibility(false));
    first = false;
  }

  const { sidebar } = store.getState();
  return (
    <Transition animationKey={sidebar}>
      <StyledLayout>
        {sidebar && <Sidebar />}
        <StyledMain sidebar={sidebar}>
          <Transition animationKey={location.pathname}>{children}</Transition>
        </StyledMain>
      </StyledLayout>
    </Transition>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
