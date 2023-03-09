import * as React from 'react';
import { FaMapMarkedAlt, FaCloud } from 'react-icons/fa';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';
import { StyledPlace } from './StyledPlace';
import { StyledLocation } from './StyledLocation';

type FormatPlaceProps = {
  data: {
    frontmatter: {
      title: string;
      location: {
        title: string;
        subtitle: string;
        map: string;
        address: string;
        web: string;
      };
    };
    body: string;
  };
  images: { image: IGatsbyImageData }[];
  returnPage: string;
};

export const FormatPlace: React.FC<FormatPlaceProps> = ({
  data,
  images,
  returnPage,
}) => {
  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledPlace>
        <div>
          {images.map((item: any, idx: number) => (
            <div key={idx}>
              <GatsbyImage
                image={getImage(item.image) as IGatsbyImageData}
                alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
                objectFit={'contain'}
              />
            </div>
          ))}
        </div>
        <h2>{data.frontmatter.title}</h2>
        {data.body}

        <StyledLocation>
          <h3>{data.frontmatter.location.title}</h3>
          <h4>{data.frontmatter.location.subtitle}</h4>
          <address>
            <a
              href={data.frontmatter.location.map}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              <FaMapMarkedAlt /> {data.frontmatter.location.address}
            </a>
          </address>
          <div className={'web'}>
            <a
              href={data.frontmatter.location.web}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              <FaCloud /> {data.frontmatter.location.web}
            </a>
          </div>
        </StyledLocation>
      </StyledPlace>
    </>
  );
};
