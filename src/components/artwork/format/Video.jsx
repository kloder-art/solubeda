import React from 'react';
import styled from 'styled-components';

import Close from '../Close';

const StyledVideo = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);

  iframe, object, embed {
    grid-column: 2 / 6;
    grid-row: 2 / 5;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    box-shadow: 0 8px 16px rgba(0,0,0,.5)
  }
`;

const StyledHeader = styled.div`
  grid-column: 2 / 6;
  grid-row: 1 / 2;
  align-self: flex-end;
  padding-bottom: 32px;
  font-size: 32px;
`;

const StyledInfo = styled.div`
  grid-column: 2 / 6;
  grid-row: 5 / 6;
  padding-top: 32px;
`;

const Video = ({ data, returnPage }) => {
  const src = `https://www.youtube.com/embed/${data.frontmatter.video}`;
  return (
    <>
      <Close url={returnPage} />
      <StyledVideo>
        <StyledHeader>
          {data.frontmatter.title}
        </StyledHeader>
        <iframe
          title={data.frontmatter.title}
          width={560} height={315}
          src={src}
          frameBorder={0}
          allow={'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'}
          allowFullScreen
          autoPlay
          rel={0}
        />
        <StyledInfo dangerouslySetInnerHTML={{ __html: data.html }} />
      </StyledVideo>
    </>
  );
};

export default Video;

