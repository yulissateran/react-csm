import { CMSTheme } from '../../../theme';
import { TextSize, TextStyles } from './Text.styles';

export interface TextProps {
  children?: React.ReactNode;
  tagAs?: React.ElementType;
  variant?: TextSize;
  bold?: boolean;
  color?: keyof CMSTheme['palette'];
  className?: string;
  noOfLines?: number;
}

const TextComponent: React.FC<TextProps> = ({ children, tagAs, color, bold, className, variant = 'Base', noOfLines }) => (
  <TextStyles.Text as={tagAs} variant={variant} color={color} bold={bold} className={className} noOfLines={noOfLines}>
    {children}
  </TextStyles.Text>
);

export default TextComponent;
