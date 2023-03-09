import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { ArtworkClose } from '../ArtworkClose';
import { StyledCam } from './StyledCam';
import { StyledImageHolder } from './StyledImageHolder';

// For avoid call several times by the animation
const status = { enter: false, exit: false };

type FormatCamProps = {
  data: { frontmatter: { title: string } };
  images: { image: IGatsbyImageData; title: string }[];
  returnPage: string;
};

export const FormatCam: React.FC<FormatCamProps> = ({
  data,
  images,
  returnPage,
}) => {
  const camRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const cam = camRef.current as HTMLVideoElement;
    let camStream: MediaStream;
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
      <StyledCam autoPlay={true} ref={camRef} />
      <StyledImageHolder>
        <GatsbyImage
          image={getImage(image.image) as IGatsbyImageData}
          alt={image.title || data.frontmatter.title}
        />
      </StyledImageHolder>
    </>
  );
};
