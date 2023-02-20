import Input from 'components/molecules/Input/Input';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.offWhite};
  border-radius: 20px;
  color: ${({ theme }) => theme.palette.notQuiteBlack};
  label {
    display: flex;
    align-items: center;
  }
`;

const StyledInput = styled(Input)`
  padding: 10px 20px 10px 0;
  background-color: ${({ theme }) => theme.palette.offWhite};
  font-size: 14px;
  line-height: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  width: 120px;
`;

const IconContainer = styled.div`
  margin-left: 12px;
  margin-right: 12px;

  svg,
  path {
    opacity: 0.8;
  }
`;
const Popover = styled.div`
  min-width: 320px;
  top: 4px;
  background: white;
  position: absolute;
  border: 1px solid ${({ theme }) => theme.palette.grayLigth};
  right: 0;
  left: 0;
  width: 100%;
  box-shadow: rgb(0 0 0 / 10%) 0px 20px 20px 0px;

  ${({ theme }) => theme.mediaQueries.tablet} {
    width: 350px;
    left: unset;
    max-height: 400px;
  }

  button {
    text-align: start;
  }

  li {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grayLigth};

    a {
      display: block;
      padding: 16px;

      :hover {
        background-color: ${({ theme }) => theme.palette.offWhite};
      }
    }
  }
`;

const PopoverContainer = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  background-color: red;

  ${({ theme }) => theme.mediaQueries.tablet} {
    position: relative;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }
`;

export const SearchInputStyles = {
  Container,
  StyledInput,
  IconContainer,
  Popover,
  PopoverContainer,
};
