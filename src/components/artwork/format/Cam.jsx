import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import Close from '../Close';

const StyledCam = styled.video`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
	background-color: #666;
`;

const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,.2);

  img {
    max-height: 80vh;
    max-width: 90vw;
    box-shadow: 0 0 20px rgba(0,0,0,.5);
  }
`;

// For avoid call several times by the animation
const status = { enter: false, exit: false };

const Cam = ({ data, images, returnPage }) => {
  const camRef = useRef(null);
  useEffect(() => {
    const cam = camRef.current;
    let camStream = null;
    if (!status.enter) {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: {
            width: cam.offsetHeight,
            height: cam.offsetWidth,
          }
        }).then((stream) => {
          camStream = stream;
          cam.srcObject = camStream;
          cam.onloadedmetadata = (e) => cam.play();
          status.enter = false;
        }).catch((err) => {
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
      <Close url={returnPage} />
      <StyledCam autoplay={'true'} ref={camRef} />
      <ImageHolder>
        <img
          src={image.path}
          alt={image.title || data.frontmatter.title}
        />
      </ImageHolder>
    </>
  );
};

export default Cam;

