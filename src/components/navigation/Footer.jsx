import React from 'react';
import styled, { css } from 'styled-components';
import { FaYoutube } from 'react-icons/fa';

const year = new Date().getFullYear();

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 12px;
  @media (max-width: 920px) {
    opacity: 0;
    pointer-events: none;
    ${(props) =>
      props.showMenu &&
      css`
        color: white;
        pointer-events: all;
        opacity: 1;
      `}
  }
`;

const StyledSocial = styled.ul``;

const StyledCopy = styled.div`
  @media (max-width: 920px) {
    text-align: right;
  }
`;

const socialMap = [
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCUV5-8dOIKPplM25rtBNN3g',
    Icon: FaYoutube,
  },
];

const Footer = (props) => (
  <StyledFooter showMenu={props.showMenu}>
    <StyledSocial>
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
    </StyledSocial>
    <StyledCopy>&copy; {year} Sol Úbeda</StyledCopy>
  </StyledFooter>
);

export default Footer;
