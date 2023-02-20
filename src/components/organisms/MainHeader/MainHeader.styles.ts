import Flex from 'components/atoms/Flex/Flex';
import MenuNav from 'components/molecules/Nav/Nav';
import styled from 'styled-components';

const SearchContainer = styled.div`
  order: 2;

  ${({ theme }) => theme.mediaQueries.tablet} {
    order: 3;
  }
`;

const MenuContainer = styled.div`
  order: 3;

  ${({ theme }) => theme.mediaQueries.tablet} {
    order: 2;
  }
`;

const MobileContent = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.tablet} {
    display: none;
  }
`;

const DesktopContent = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.tablet} {
    display: flex;
  }
`;

const HamburgerButtonContainer = styled.div`
  margin-bottom: -8px;
`;

const MenuNavDesktop = styled(MenuNav)`
  > .MenuNav_list {
    flex-direction: row;
    gap: 24px;
  }
`;

export const MainHeaderStyles = {
  SearchContainer,
  MenuContainer,
  DesktopContent,
  MobileContent,
  HamburgerButtonContainer,
  MenuNavDesktop,
};
