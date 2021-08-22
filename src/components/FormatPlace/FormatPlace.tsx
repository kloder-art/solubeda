import React from 'react';
import { FaMapMarkedAlt, FaCloud } from 'react-icons/fa';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';

import { StyledPlace } from './StyledPlace';
import { StyledLocation } from './StyledLocation';

export const FormatPlace = ({ data, images, returnPage }) => {
  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledPlace>
        <div>
          {images.map((item: any, idx: number) => (
            <div key={idx}>
              <GatsbyImage
                image={getImage(item.image)}
                alt={item.title || `${data.frontmatter.title} #${idx + 1}`}
                objectFit={'contain'}
              />
            </div>
          ))}
        </div>
        <div>
          <h2>{data.frontmatter.title}</h2>
          <MDXRenderer>{data.body}</MDXRenderer>

          <StyledLocation>
            <h3>{data.frontmatter.location.title}</h3>
            <h4>{data.frontmatter.location.subtitle}</h4>
            <address>
              <a
                href={data.frontmatter.location.map}
                target={'_blank'}
                rel={'noopener noreferer'}
              >
                <FaMapMarkedAlt /> {data.frontmatter.location.address}
              </a>
            </address>
            <div className={'web'}>
              <a
                href={data.frontmatter.location.web}
                target={'_blank'}
                rel={'noopener noreferer'}
              >
                <FaCloud /> {data.frontmatter.location.web}
              </a>
            </div>
          </StyledLocation>
        </div>
      </StyledPlace>
    </>
  );
};
