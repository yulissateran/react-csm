import styled from 'styled-components';

const Container = styled.div`
  padding: 0 24px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    padding: 0 48px;
  }
  ${({ theme }) => theme.mediaQueries.laptop} {
    padding: 0 64px;
  }
`;

export default Container;
