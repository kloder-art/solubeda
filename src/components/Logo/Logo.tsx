import * as React from 'react';
import { navigate } from '@reach/router';
import { FiMenu } from 'react-icons/fi';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledLogo } from './StyledLogo';
import { StyledBtnMenu } from './StyledBtnMenu';

type LogoProps = {
  showMenu: boolean;
  onClick: () => void;
};

export const Logo: React.FC<LogoProps> = ({ showMenu, onClick }) => (
  <StyledLogo showMenu={showMenu}>
    <StaticImage
      src={'../../images/sign-red.png'}
      alt={'Logo'}
      onClick={() => navigate('/')}
    />
    <h1>Sol Úbeda</h1>
    <StyledBtnMenu onClick={onClick} showMenu={showMenu}>
      <FiMenu size={32} />
    </StyledBtnMenu>
  </StyledLogo>
);
