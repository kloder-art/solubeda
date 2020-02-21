import React from 'react';
import styled, { css } from 'styled-components';

const year = new Date().getFullYear();

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 12px;
  @media (max-width: 920px) {
    opacity: 0;
    pointer-events: none;
    ${props => props.showMenu && css`
      color: white;
      pointer-events: all;
      opacity: 1;
    `}
  }
`;

const StyledSocial = styled.ul`
  img {
    width: 16px;
    height: 16px;
    @media (max-width: 920px) {
      filter: invert(1);
    }
  }
`;

const StyledCopy = styled.div`
  @media (max-width: 920px) {
    text-align: right;
  }
`;

const socialMap = [
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCUV5-8dOIKPplM25rtBNN3g',
    icon: require('../../images/icons/youtube.svg')
  },
];

const Footer = (props) => (
  <StyledFooter showMenu={props.showMenu}>
    <StyledSocial>
      {socialMap.map((item, idx) => (
        <li key={idx}>
          <a href={item.link} title={item.title} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt={item.title} />
          </a>
        </li>
      ))}
    </StyledSocial>
    <StyledCopy>
      &copy; {year} Sol Úbeda
    </StyledCopy>
  </StyledFooter>
);

export default Footer;
