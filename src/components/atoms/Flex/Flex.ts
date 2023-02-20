import styled, { css } from 'styled-components';
import { CMSTheme } from '../../../theme';

interface FlexProps {
  flexDir?: 'row' | 'column';
  justifyContent?: 'space-between' | 'flex-end' | 'flex-start' | 'center';
  alignItems?: 'center' | 'flex-end';
  gap?: keyof CMSTheme['spacing'] | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: 'auto';
}

const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ flexDir, justifyContent, gap, theme, alignItems, flexGrow, flexShrink, flexBasis }) => css`
    ${flexDir &&
    css`
      flex-direction: ${flexDir};
    `};

    ${alignItems &&
    css`
      align-items: ${alignItems};
    `};

    ${justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

    ${gap &&
    css`
      gap: ${theme.spacing[gap] || gap};
    `};

    ${flexGrow &&
    css`
      flex-grow: ${flexGrow};
    `};

    ${flexShrink &&
    css`
      flex-shrink: ${flexShrink};
    `};

    ${flexBasis &&
    css`
      flex-basis: ${flexBasis};
    `};
  `}
`;

export default Flex;
