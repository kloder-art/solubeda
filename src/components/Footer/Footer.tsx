import * as React from 'react';
import { FaYoutube } from 'react-icons/fa';

import { StyledFooter } from './StyledFooter';
import { StyledCopy } from './StyledCopy';

const year = new Date().getFullYear();

const socialMap = [
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCUV5-8dOIKPplM25rtBNN3g',
    Icon: FaYoutube,
  },
];

type FooterProps = {
  showMenu: boolean;
};

export const Footer: React.FC<FooterProps> = ({ showMenu }) => (
  <StyledFooter showMenu={showMenu}>
    <ul>
      {socialMap.map((item, idx) => (
        <li key={idx}>
          <a
            href={item.link}
            title={item.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
    <StyledCopy>&copy; {year} Sol Úbeda</StyledCopy>
  </StyledFooter>
);
