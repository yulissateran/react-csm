import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const Content = styled.nav`
  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export const MenuNavStyles = {
  Content,
  StyledButton,
};
