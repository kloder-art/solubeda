import * as React from 'react';
import Slider from 'react-slick';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';
import { Action, Timer } from '../Timer';
import { StyledSlide } from './StyledSlide';

type FormatSlideshowProps = {
  data: { frontmatter: { slideshowTime: number; title: string } };
  images: { image: IGatsbyImageData }[];
  returnPage: string;
};

export const FormatSlideshow: React.FC<FormatSlideshowProps> = ({
  data,
  images,
  returnPage,
}) => {
  const [action, setAction] = React.useState<Action>('idle');

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
          speed={300}
          autoplay={true}
          autoplaySpeed={totalTime}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((item: any, idx: number) => (
            <div key={idx}>
              <GatsbyImage
                image={getImage(item.image) as IGatsbyImageData}
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
