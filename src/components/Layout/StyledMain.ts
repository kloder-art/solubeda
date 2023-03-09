import styled, { css } from 'styled-components';

type StyledMainProps = {
  sidebar: boolean;
};

export const StyledMain = styled.main<StyledMainProps>`
  overflow: hidden;
  overflow-y: auto;

  ${({ sidebar }) =>
    sidebar &&
    css`
      padding-top: 32px;
      @media (max-width: 920px) {
        /* padding-top: 128px; */
      }
    `}

  @media (min-width: 920px) {
    width: ${({ sidebar }) => (!sidebar ? '100vw' : 'calc(100vw - 280px)')};
    margin-left: ${({ sidebar }) => (!sidebar ? '0' : '280px')};
  }
  height: 100vh;
  width: 100%;
  box-sizing: border-box;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: lightgrey;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: grey;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: darkgrey;
  }
`;
