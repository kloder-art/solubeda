import styled from 'styled-components';

type Props = {
  spanY: number;
  spanX: number;
};

export const StyledArtwork = styled.div`
  text-align: center;
  cursor: pointer;

  @media (min-width: 920px) {
    grid-row-end: span ${({ spanY }: Props) => (spanY ? spanY : 1)};
    grid-column-end: span ${({ spanX }: Props) => (spanX ? spanX : 1)};
  }

  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: ${({ spanY }: Props) => `${(spanY ? spanY : 1) * 300}px`};
    /* max-height: 300px; */
    transition: box-shadow 0.4s;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    :hover {
      box-shadow: 0 16px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;
