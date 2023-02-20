import styled from 'styled-components';
import TextComponent from '../Text/Text';

const Paragraph = styled(TextComponent).attrs(() => ({
  tagAs: 'p',
  variant: 'Base',
}))`
  margin-bottom: 10px;
  padding-bottom: 4px;
`;

export default Paragraph;
