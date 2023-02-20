import { FC } from 'react';
import styled from 'styled-components';
import TextComponent, { TextProps } from '../Text/Text';

interface HeadingProps extends Omit<TextProps, 'tagAs'> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const Heading: FC<HeadingProps> = styled(TextComponent).attrs<HeadingProps>(({ type, variant }) => ({
  tagAs: type || 'h1',
  variant: variant || 'Base',
}))`
  display: block;
  padding: 10px 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Heading;
