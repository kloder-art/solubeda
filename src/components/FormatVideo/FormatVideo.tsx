import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { ArtworkClose } from '../ArtworkClose';

import { StyledVideo } from './StyledVideo';
import { StyledHeader } from './StyledHeader';
import { StyledInfo } from './StyledInfo';

export const FormatVideo = ({ data, returnPage }) => {
  const src = `https://www.youtube.com/embed/${data.frontmatter.video}`;
  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledVideo>
        <StyledHeader>{data.frontmatter.title}</StyledHeader>
        <iframe
          title={data.frontmatter.title}
          width={560}
          height={315}
          src={src}
          frameBorder={0}
          allow={
            'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          }
          allowFullScreen
        />
        <StyledInfo>
          <MDXRenderer>{data.body}</MDXRenderer>
        </StyledInfo>
      </StyledVideo>
    </>
  );
};
