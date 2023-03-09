import * as React from 'react';
import { navigate } from 'gatsby';
import { VscClose } from 'react-icons/vsc';

import { StyledArtworkClose } from './StyledArtworkClose';

type ArtworkCloseProps = {
  url: string;
};

export const ArtworkClose: React.FC<ArtworkCloseProps> = ({ url }) => {
  const goToUrl = React.useCallback(() => {
    if (url) {
      navigate(url);
    } else {
      navigate('/');
    }
  }, [url]);

  React.useEffect(() => {
    const onKeyUp = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        goToUrl();
      }
    };

    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, [goToUrl]);

  return (
    <StyledArtworkClose onClick={goToUrl}>
      <VscClose size={56} />
    </StyledArtworkClose>
  );
};
