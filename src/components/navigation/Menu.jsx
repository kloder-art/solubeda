import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const items = [
  { link: '/', text: 'Obras' },
  { link: '/exhibitions', text: 'Exposiciones' },
  { link: '/press', text: 'Prensa' },
  { link: '/curriculum', text: 'Curriculum' },
  { link: '/contact', text: 'Contacto' },
];

const StyledMenu = styled.ul`
  align-self: flex-start;
  justify-self: center;

  li {
    padding: 8px 0;
    a {
      font-size: 20px;
      text-decoration: none;
      transition: all 0.4s;
      perspective: 20px;
      color: #222;

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;

        div:first-child {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          background: white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
          font-size: 14px;
          margin-right: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s;
        }
      }

      :hover {
        color: #cc0000;
        > div {
          div {
            transform: rotateX(180deg);
          }
        }
      }
    }
  }

  li.active {
    a {
      color: #cc0000;
      div {
        div {
          color: white;
          background: #cc0000;
        }
      }
    }
  }

  @media (max-width: 920px) {
    pointer-events: none;
    align-self: center;
    ${(props) =>
      props.showMenu
        ? css`
            pointer-events: all;
            li a {
              color: white;
              > div div:first-child {
                color: black;
              }
            }
            li.active {
              color: #cc0000;
            }
          `
        : css`
            opacity: 0;
          `}
  }
`;

// this.props.location.pathname

const Menu = (props) => (
  <StyledMenu showMenu={props.showMenu}>
    {items.map((item, idx) => (
      <li
        className={props.location.pathname === item.link ? 'active' : ''}
        key={idx}
      >
        <Link to={item.link} onClick={props.onClick}>
          <div>
            <div>{String(idx + 1).padStart(2, '0')}</div>
            {item.text}
          </div>
        </Link>
      </li>
    ))}
  </StyledMenu>
);

export default Menu;
