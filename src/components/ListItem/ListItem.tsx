import * as React from 'react';

import { StyledListItem } from './StyledListItem';

type ListItemProps = {
  image?: {
    childImageSharp: {
      gatsbyImageData: { images: { fallback: { src: string } } };
    };
  };
  onItemClick?: (slug: string) => void;
  slug?: string;
  date?: string;
  title?: string;
};

export const ListItem: React.FC<ListItemProps> = ({
  image,
  onItemClick,
  slug,
  date,
  title,
}) => (
  <StyledListItem
    imagePath={
      image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src ?? ''
    }
    onClick={() => {
      if (onItemClick) {
        onItemClick(slug || '');
      }
    }}
  >
    <div className={'title'}>
      {date && <div className={'date'}>{date}</div>}
      {title}
    </div>
  </StyledListItem>
);
