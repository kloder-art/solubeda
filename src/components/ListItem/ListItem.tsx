import React from 'react';

import { StyledListItem } from './StyledListItem';

export const ListItem = ({ image, onItemClick, slug, date, title }) => (
  <StyledListItem
    imagePath={image.childImageSharp.gatsbyImageData.images.fallback.src}
    onClick={() => onItemClick(slug)}
  >
    <div className={'title'}>
      {date && <div className={'date'}>{date}</div>}
      {title}
    </div>
  </StyledListItem>
);
