import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { store, actions } from '../../state';
import { VscClose } from 'react-icons/vsc';

import { StyledArtworkClose } from './StyledArtworkClose';

export const ArtworkClose = ({ url }) => {
  const restoreSidebarVisibility = () => {
    store.dispatch(actions.setSidebarVisibility(true));
  };

  const goToUrl = () => {
    // Restore the sidebar before jump
    restoreSidebarVisibility();
    if (url) {
      navigate(url);
    } else {
      navigate('/');
    }
  };

  const onPopState = () => {
    restoreSidebarVisibility();
  };

  const onKeyUp = (ev: KeyboardEvent) => {
    if (ev.key === 'Escape') {
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
    <StyledArtworkClose onClick={goToUrl} href={'javascript:void(0);'}>
      <VscClose size={56} />
    </StyledArtworkClose>
  );
};
