import styled from 'styled-components';

export const StyledTimer = styled.div`
  position: fixed;
  width: 100vw;
  height: 4px;
  @media (man-width: 920px) {
    height: 2px;
  }
  left: 0;
  bottom: 0;
  .progress {
    transition: all ${({ timeStep }) => timeStep / 1000}s;
    transition-timing-function: linear;
    height: 100%;
    width: ${({percentage}) => percentage}%;
    background: #cc0000;
  }
`;
