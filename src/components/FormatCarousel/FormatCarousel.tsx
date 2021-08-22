import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';

import { StyledCarousel } from './StyledCarousel';
import { StyledAssembly } from './StyledAssembly';

export const FormatCarousel = ({ data, images, returnPage }) => (
  <>
    <ArtworkClose url={returnPage} />
    <StyledCarousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      useKeyboardArrows={true}
    >
      {images.map((item: any, idx: number) => (
        <StyledAssembly key={idx}>
          <GatsbyImage
            image={getImage(item.image)}
            alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
            objectFit={'contain'}
          />
          <div className={'info'}>
            <div>
              {item.title && <div className={'title'}>{item.title}</div>}
              <div className={'serie'}>
                {`${data.frontmatter.title} #${idx + 1}`}
              </div>
              <div className={'year'}>{item.year || data.frontmatter.year}</div>
            </div>
            <div className={'right-side'}>
              <div className={'technic'}>
                {item.technic || data.frontmatter.technic}
              </div>
              <div className={'dimensions'}>
                {item.dimensions || data.frontmatter.dimensions}
              </div>
            </div>
          </div>
        </StyledAssembly>
      ))}
    </StyledCarousel>
  </>
);
