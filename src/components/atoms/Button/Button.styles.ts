import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

const primaryStyles = css`
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.white};

  :hover {
    background-color: hsl(235, 86.1%, 70%);
  }
`;

const disabledPrimaryStyles = css`
  opacity: 0.25;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  background-color: transparent;
  font-weight: 800;
  padding: 0;

  :hover {
    cursor: pointer;
  }

  ${({ variant }) => variant === 'primary' && primaryStyles}
  ${({ disabled }) => disabled && disabledPrimaryStyles}
  ${({ variant }) =>
    variant === 'basic' &&
    css`
      padding: 8px;
    `}
`;

export const ButtonStyles = {
  Button,
};
