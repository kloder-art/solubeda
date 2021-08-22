import React, { useState } from 'react';
import Slider from 'react-slick';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';
import { Timer } from '../Timer';

import { StyledSlide } from './StyledSlide';

export const FormatSlideshow = ({ data, images, returnPage }) => {
  const [action, setAction] = useState('idle');

  const totalTime = data.frontmatter.slideshowTime
    ? data.frontmatter.slideshowTime * 1000
    : 3000;

  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledSlide>
        <Slider
          onInit={() => setAction('start')}
          afterChange={() => setAction('reset')}
          beforeChange={() => setAction('idle')}
          fade={true}
          arrows={false}
          infinite={true}
          pauseOnHover={false}
          lazyLoad={true}
          speed={300}
          autoplay={true}
          autoplaySpeed={totalTime}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((item, idx) => (
            <div key={idx}>
              <GatsbyImage
                image={getImage(item.image)}
                alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
                objectFit={'contain'}
              />
            </div>
          ))}
        </Slider>
      </StyledSlide>
      <Timer totalTime={totalTime} action={action} />
    </>
  );
};
