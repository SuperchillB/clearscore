import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 1120px;
  /* max-width: ${({ theme }) => theme.breakpoints.xl}; */
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => `0 ${theme.space.xxlarge}`};
`;
