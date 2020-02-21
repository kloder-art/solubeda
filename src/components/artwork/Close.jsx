import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import closeIcon from '../../images/icons/close.svg';
import { store, actions } from '../../state';

const StyledCloseButton = styled.div`
  ::before {
    position: absolute;
    right: 16px; top: 16px;
    width: 32px;
    height: 32px;
    content: ' ';
    cursor: pointer;
    z-index: 10;
    background-image: url(${closeIcon});
    background-size: contain;
  }
`;

const Close = ({ url }) => {

  const restoreSidebarVisibility = () => {
    store.dispatch(actions.setSidebarVisibility(true));
  };

  const goToUrl = () => {
    // Restore the sidebar before jump
    restoreSidebarVisibility();
    if (url) {navigate(url);}
    else {navigate('/');}
  };

  const onPopState = () => {
    restoreSidebarVisibility();
  };

  const onKeyUp = (ev) => {
    if(ev.key === 'Escape') {
      goToUrl();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    window.addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    <StyledCloseButton onClick={goToUrl} />
  );
};

export default Close;
