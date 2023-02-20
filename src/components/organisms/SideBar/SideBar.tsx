import { MenuItemInterface } from 'domain/menu-item.interface';
import Button from '../../atoms/Button/Button';
import Divider from '../../atoms/Divider/Divider';
import { CloseIcon } from '../../atoms/icons/CloseIcon/CloseIcon';
import Logo from '../../molecules/Logo/Logo';
import { SidebarStyles } from './SideBar.styles';

const Sidebar: React.FC<{ items: MenuItemInterface[]; onClickCloseButton: () => void; onClickMenuItem: () => void }> = ({
  items,
  onClickCloseButton,
  onClickMenuItem,
}) => {
  return (
    <SidebarStyles.Sidebar>
      <SidebarStyles.SidebarHeader justifyContent="space-between" alignItems="center">
        <Logo variant="word" />
        <SidebarStyles.CloseButtonContainer>
          <Button onClick={onClickCloseButton} variant="basic">
            <CloseIcon />
          </Button>
        </SidebarStyles.CloseButtonContainer>
      </SidebarStyles.SidebarHeader>
      <Divider />

      <SidebarStyles.Body>
        <SidebarStyles.StyledMenuNav items={items} onClick={onClickMenuItem} />
      </SidebarStyles.Body>
    </SidebarStyles.Sidebar>
  );
};

export default Sidebar;
