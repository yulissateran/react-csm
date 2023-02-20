import styled from 'styled-components';
import TextComponent from '../../atoms/Text/Text';

const StyledTag = styled(TextComponent)`
  display: flex;
  padding: 4px 8px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.palette.grayLigth};
`;

const Tag: React.FC<{ text: string }> = ({ text }) => {
  return <StyledTag variant="Small">{text}</StyledTag>;
};

export default Tag;
