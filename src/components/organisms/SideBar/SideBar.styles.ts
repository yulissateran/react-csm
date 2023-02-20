import Flex from 'components/atoms/Flex/Flex';
import MenuNav from 'components/molecules/Nav/Nav';
import styled from 'styled-components';

const CloseButtonContainer = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  margin: -8px;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0 48px 120px 24px;
  background-color: ${({ theme }) => theme.palette.white};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

const SidebarHeader = styled(Flex)`
  height: 80px;
`;

const Body = styled.div`
  margin-top: 16px;
`;

const StyledMenuNav = styled(MenuNav)`
  li {
    width: 100%;

    a {
      display: block;
      padding: 16px;
      border-radius: 8px;

      :hover {
        text-decoration: underline;
        background-color: ${({ theme }) => theme.palette.offWhite};
      }
    }

    a.active {
      background-color: ${({ theme }) => theme.palette.grayLigth};
      color: ${({ theme }) => theme.palette.textLink};

      > span {
        color: ${({ theme }) => theme.palette.textLink};
      }

      :hover {
        background-color: ${({ theme }) => theme.palette.offWhite};
      }
    }
  }
`;

export const SidebarStyles = {
  Sidebar,
  SidebarHeader,
  CloseButtonContainer,
  Body,
  StyledMenuNav,
};
