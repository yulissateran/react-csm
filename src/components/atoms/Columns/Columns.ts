import styled from 'styled-components';

const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    flex-direction: row;
    gap: 48px;
  }
`;

export default Columns;
