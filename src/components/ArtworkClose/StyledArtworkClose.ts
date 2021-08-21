import styled from 'styled-components';

import icon from '../../images/icons/close.svg';

export const StyledArtworkClose = styled.div`
  ::before {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    content: ' ';
    cursor: pointer;
    z-index: 10;
    background-image: url(${icon});
    background-size: contain;
  }
`;
