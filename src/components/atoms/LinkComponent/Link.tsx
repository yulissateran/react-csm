import { LinkProps } from 'react-router-dom';
import { LinkStyles } from './Link.styles';

const LinkComponent: React.FC<LinkProps> = ({ children, to, ...props }) => {
  return (
    <LinkStyles.StyledLink to={to} {...props}>
      {children}
    </LinkStyles.StyledLink>
  );
};

export default LinkComponent;
