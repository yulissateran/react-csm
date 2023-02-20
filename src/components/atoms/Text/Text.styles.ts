import styled, { css } from 'styled-components';
import { TextProps } from './Text';

const textSizesStyles = {
  ExtraLarge2: css`
    font-family: 'Brygada 1918';
    font-size: 72px;
    line-height: 1.14;
    letter-spacing: -1.44px;
  `,
  ExtraLarge1: css`
    font-family: 'Brygada 1918';
    font-size: 64px;
    line-height: 1.16;
    letter-spacing: -0.64px;
  `,
  Large3: css`
    font-family: 'Brygada 1918';
    font-size: 56px;
    line-height: 1.18;
    letter-spacing: normal;
  `,
  Large2: css`
    font-family: 'Brygada 1918';
    font-size: 48px;
    line-height: 1.21;
    letter-spacing: normal;
  `,
  Large1: css`
    font-family: 'Brygada 1918';
    font-size: 40px;
    line-height: 1.25;
    letter-spacing: normal;
  `,
  Medium3: css`
    font-family: 'Nunito';
    font-size: 32px;
    line-height: 1.31;
    letter-spacing: -0.32px;
  `,
  Medium2: css`
    font-family: 'Nunito';
    font-size: 24px;
    line-height: 1.42;
    letter-spacing: -0.24px;
  `,
  Medium1: css`
    font-family: 'Nunito';
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: normal;
  `,
  Base: css`
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 1.63;
    letter-spacing: normal;
  `,
  Small: css`
    font-family: 'Nunito';
    font-size: 14px;
    line-height: 1.71;
    letter-spacing: normal;
  `,
  Tiny3: css`
    font-family: 'Nunito';
    font-size: 12px;
    line-height: 1.83;
    letter-spacing: normal;
  `,
  Tiny2: css`
    font-family: 'Nunito';
    font-size: 10px;
    line-height: 1.83;
    letter-spacing: normal;
  `,
  Tiny1: css`
    font-family: 'Nunito';
    font-size: 8px;
    line-height: 1.83;
    letter-spacing: normal;
  `,
};

export type TextSize = keyof typeof textSizesStyles;

const Text = styled.span<TextProps>`
  color: ${({ color, theme }) => (color ? theme.palette[color] : theme.palette.black)};
  font-weight: ${({ bold }) => (bold ? 800 : 400)};

  ${({ variant }) => !variant && textSizesStyles.Base}
  ${({ variant }) => variant && textSizesStyles[variant]}

  ${({ noOfLines }) =>
    noOfLines &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${noOfLines};
      -webkit-box-orient: vertical;
    `}
`;

export const TextStyles = {
  Text,
};
