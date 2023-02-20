import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type size = 'md' | 'lg';

const StyledCenteredContent = styled.div<{ size?: size }>`
  ${({ theme }) => theme.mediaQueries.tablet} {
    margin: 0 auto;

    ${({ size }) =>
      size === 'md' &&
      css`
        max-width: 750px;
      `}
  }
  ${({ theme }) => theme.mediaQueries.laptopL} {
    ${({ size }) =>
      size === 'lg' &&
      css`
        max-width: 1120px;
      `}
  }
`;

const CenteredContent: FC<{ children?: ReactNode; size?: size }> = ({ children, size = 'md' }) => (
  <StyledCenteredContent className="StyledCenteredContent" size={size}>
    {children}
  </StyledCenteredContent>
);

export default CenteredContent;
