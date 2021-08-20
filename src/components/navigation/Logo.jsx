import React from 'react';
import styled, { css } from 'styled-components';
import { navigate } from '@reach/router';

import sign from '../../images/sign.png';
import menuIcon from '../../images/icons/menu.svg';

const StyledLogo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  img {
    cursor: pointer;
  }
  h1 {
    display: none;
  }

  @media (max-width: 920px) {
    img {
      opacity: 0;
      pointer-events: none;
    }
    ${(props) =>
      props.showMenu &&
      css`
        img {
          pointer-events: all;
          opacity: 1;
          filter: invert(1);
        }
      `}
  }
`;

const StyledBtnMenu = styled.div`
  align-self: flex-start;
  justify-self: right;
  pointer-events: all;
  @media (min-width: 920px) {
    display: none;
  }
  width: 32px;
  height: 32px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  background-color: white;
  background-image: url(${menuIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50%;

  ${(props) =>
    props.showMenu &&
    css`
      background-color: #cc0000;
      color: white;
    `}
`;

const Logo = (props) => (
  <StyledLogo showMenu={props.showMenu}>
    <img src={sign} alt={'Logo'} onClick={() => navigate('/')} />
    <h1>Sol Úbeda</h1>
    <StyledBtnMenu showMenu={props.showMenu} onClick={props.onClick} />
  </StyledLogo>
);

export default Logo;
