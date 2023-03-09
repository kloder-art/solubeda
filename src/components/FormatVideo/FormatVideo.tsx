import * as React from 'react';

import { ArtworkClose } from '../ArtworkClose';

import { StyledVideo } from './StyledVideo';
import { StyledHeader } from './StyledHeader';
import { StyledInfo } from './StyledInfo';

type FormatVideoProps = {
  data: {
    frontmatter: {
      video: string;
      title: string;
    };
    body: string;
  };
  returnPage: string;
};

export const FormatVideo: React.FC<FormatVideoProps> = ({
  data,
  returnPage,
}) => {
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
          allow={
            'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          }
          allowFullScreen
        />
        <StyledInfo>{data.body}</StyledInfo>
      </StyledVideo>
    </>
  );
};
