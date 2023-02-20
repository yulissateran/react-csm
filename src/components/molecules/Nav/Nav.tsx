import { MenuItemInterface } from 'domain/menu-item.interface';
import NavLinkComponent from '../../atoms/NavLinkComponent/Link';
import TextComponent from '../../atoms/Text/Text';
import { MenuNavStyles } from './Nav.styles';

const MenuNav: React.FC<{ items: MenuItemInterface[]; onClick?: () => void; className?: string }> = ({ items, className, onClick }) => {
  return (
    <MenuNavStyles.Content className={className}>
      <ul className="MenuNav_list">
        {items.map((item) => (
          <li key={item.path}>
            <MenuNavStyles.StyledButton variant="unstyled" onClick={onClick}>
              <NavLinkComponent to={item.path}>
                <TextComponent noOfLines={1}>{item.label}</TextComponent>
              </NavLinkComponent>
            </MenuNavStyles.StyledButton>
          </li>
        ))}
      </ul>
    </MenuNavStyles.Content>
  );
};

export default MenuNav;
