import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Slider from 'react-slick';

import { ArtworkClose } from '../ArtworkClose';

import { Arrow } from './Arrow';
import { StyledCarousel } from './StyledCarousel';

type FormatCarouselProps = {
  data: {
    frontmatter: {
      title: string;
      technic: string;
      dimensions: string;
      year: string;
    };
  };
  images: { image: IGatsbyImageData }[];
  returnPage: string;
};

export const FormatCarousel: React.FC<FormatCarouselProps> = ({
  data,
  images,
  returnPage,
}) => (
  <>
    <ArtworkClose url={returnPage} />
    <StyledCarousel>
      <Slider
        nextArrow={<Arrow side={'right'} />}
        prevArrow={<Arrow side={'left'} />}
      >
        {images.map((item: any, idx: number) => (
          <div key={idx}>
            <div className={'slick-content'}>
              <GatsbyImage
                image={getImage(item.image) as IGatsbyImageData}
                alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
                objectFit={'contain'}
              />
              <div className={'info'}>
                <div>
                  {item.title && <div className={'title'}>{item.title}</div>}
                  <div className={'serie'}>
                    {`${data.frontmatter.title} #${idx + 1}`}
                  </div>
                  <div className={'technic'}>
                    {item.technic || data.frontmatter.technic}
                    {item.dimensions || data.frontmatter.dimensions}
                  </div>
                  <div className={'year'}>
                    {item.year || data.frontmatter.year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </StyledCarousel>
  </>
);
