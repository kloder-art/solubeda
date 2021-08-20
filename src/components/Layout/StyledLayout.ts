import styled from 'styled-components';

export const StyledLayout = styled.div`
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
