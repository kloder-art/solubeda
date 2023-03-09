import * as React from 'react';
import { Link } from 'gatsby';

import { StyledMenu } from './StyledMenu';

const items = [
  { link: '/', text: 'Obras' },
  { link: '/exhibitions', text: 'Exposiciones' },
  { link: '/press', text: 'Prensa' },
  { link: '/curriculum', text: 'Curriculum' },
  { link: '/contact', text: 'Contacto' },
];

type MenuProps = {
  showMenu: boolean;
  onClick: () => void;
};

export const Menu: React.FC<MenuProps> = ({ showMenu, onClick }) => (
  <StyledMenu showMenu={showMenu}>
    {items.map((item, idx) => (
      <li key={item.text}>
        <Link
          to={item.link}
          onClick={onClick}
          activeClassName={'active'}
          partiallyActive={item.link !== '/'}
        >
          <div>
            <div>{String(idx + 1).padStart(2, '0')}</div>
            {item.text}
          </div>
        </Link>
      </li>
    ))}
  </StyledMenu>
);
