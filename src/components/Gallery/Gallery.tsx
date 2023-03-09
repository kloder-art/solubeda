import * as React from 'react';

import { StyledGallery } from './StyledGallery';

type GalleryProps = {
  children: React.ReactNode;
};

export const Gallery: React.FC<GalleryProps> = ({ children }) => (
  <StyledGallery>{children}</StyledGallery>
);
