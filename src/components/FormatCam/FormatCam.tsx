import React, { useRef, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';

import { StyledCam } from './StyledCam';
import { StyledImageHolder } from './StyledImageHolder';

// For avoid call several times by the animation
const status = { enter: false, exit: false };

export const FormatCam = ({ data, images, returnPage }) => {
  const camRef = useRef(null);
  useEffect(() => {
    const cam = camRef.current;
    let camStream = null;
    if (!status.enter) {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({
            video: {
              width: cam.offsetHeight,
              height: cam.offsetWidth,
            },
          })
          .then((stream) => {
            camStream = stream;
            cam.srcObject = camStream;
            cam.onloadedmetadata = () => cam.play();
            status.enter = false;
          })
          .catch((err) => {
            console.error('getUserMedia() error', err);
          });
      }
      status.enter = true;
    }

    return () => {
      if (!status.exit) {
        cam.pause();
        if (camStream) {
          camStream.getTracks()[0].stop();
        }
        status.exit = true;
      }
    };
  }, []);

  const image = images[0];
  return (
    <>
      <ArtworkClose url={returnPage} />
      <StyledCam autoplay={'true'} ref={camRef} />
      <StyledImageHolder>
        <GatsbyImage
          image={getImage(image.image)}
          alt={image.title || data.frontmatter.title}
        />
      </StyledImageHolder>
    </>
  );
};
