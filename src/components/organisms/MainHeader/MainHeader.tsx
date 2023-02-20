import Button from 'components/atoms/Button/Button';
import Flex from 'components/atoms/Flex/Flex';
import { MenuIcon } from 'components/atoms/icons/MenuIcon/MenuIcon';
import { MenuItemInterface } from 'domain/menu-item.interface';
import { Suspense, useState } from 'react';
import BaseHeader from '../BaseHeader/BaseHeader';
import SearchInput from '../SearchInput/SearchInput';
import Sidebar from '../SideBar/SideBar';
import { MainHeaderStyles } from './MainHeader.styles';

const Header: React.FC<{
  menuItems: MenuItemInterface[];
  getSuggestions: (value: string) => void;
  suggestions: MenuItemInterface[];
  searchInputPlaceholder: string;
}> = ({ getSuggestions, menuItems, searchInputPlaceholder, suggestions }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <BaseHeader>
      <MainHeaderStyles.MenuContainer>
        <Flex>
          <MainHeaderStyles.DesktopContent>
            <MainHeaderStyles.MenuNavDesktop items={menuItems} />
          </MainHeaderStyles.DesktopContent>
          <MainHeaderStyles.MobileContent>
            <MainHeaderStyles.HamburgerButtonContainer>
              <Button onClick={() => setShowSidebar(true)} variant="unstyled">
                <MenuIcon />
              </Button>
            </MainHeaderStyles.HamburgerButtonContainer>
            {/* TODO: add loader indicator */}
            <Suspense fallback={null}>
              {showSidebar && (
                <Sidebar
                  items={menuItems}
                  onClickCloseButton={() => setShowSidebar(false)}
                  onClickMenuItem={() => {
                    setShowSidebar(false);
                  }}
                />
              )}
            </Suspense>
          </MainHeaderStyles.MobileContent>
        </Flex>
      </MainHeaderStyles.MenuContainer>
      <MainHeaderStyles.SearchContainer>
        <SearchInput
          id="searchInputHeader"
          placeholder={searchInputPlaceholder}
          getSuggestions={getSuggestions}
          suggestions={suggestions}
        />
      </MainHeaderStyles.SearchContainer>
    </BaseHeader>
  );
};

export default Header;
