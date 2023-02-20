import Container from 'components/atoms/Container/Container';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 80px;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background-color: ${({ theme }) => theme.palette.white};
  > div:first-child {
    height: 100%;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const LogoContainer = styled.div`
  order: 1;
`;

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

export const BaseHeaderStyles = {
  Header,
  LogoContainer,
  SearchContainer,
  MenuContainer,
  StyledContainer,
};
