import React from 'react';
import { navigate } from '@reach/router';
import { FiMenu } from 'react-icons/fi';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledLogo } from './StyledLogo';
import { StyledBtnMenu } from './StyledBtnMenu';

export const Logo = ({ showMenu, onClick }) => (
  <StyledLogo showMenu={showMenu} href={'javascript:void(0);'}>
    <StaticImage
      src={'../../images/sign-red.png'}
      alt={'Logo'}
      onClick={() => navigate('/')}
    />
    <h1>Sol Úbeda</h1>
    <StyledBtnMenu onClick={onClick}>
      <FiMenu size={32} />
    </StyledBtnMenu>
  </StyledLogo>
);
