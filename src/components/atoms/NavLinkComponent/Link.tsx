import { NavLinkProps } from 'react-router-dom';
import { LinkStyles } from './Link.styles';

const NavLinkComponent: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <LinkStyles.Link to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
      {children}
    </LinkStyles.Link>
  );
};

export default NavLinkComponent;
