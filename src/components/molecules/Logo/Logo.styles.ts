import { LogoIcon } from 'components/atoms/icons/LogoIcon/LogoIcon';
import { LogoWordIcon } from 'components/atoms/icons/LogoWordIcon/LogoWordIcon';
import styled, { css } from 'styled-components';
import { LogoProps } from './Logo';

const showOnlyInMobileStyle = css`
  display: none;

  ${({ theme }) => theme.mediaQueries.tablet} {
    display: block;
  }
`;

const showOnlyInDesktopStyle = css`
  display: block;

  ${({ theme }) => theme.mediaQueries.tablet} {
    display: none;
  }
`;

const Logo = styled(LogoWordIcon)<{ variant: LogoProps['variant']; $color: LogoProps['color'] }>`
  color: ${({ $color, theme }) => ($color ? theme.palette[$color] : theme.palette.black)};
  display: block;
  width: 160px;
  height: 25px;
  ${({ variant }) => variant === 'responsive' && showOnlyInMobileStyle}
  ${({ variant }) =>
    variant === 'icon' &&
    css`
      display: none;
    `}


    path {
    fill: currentColor;
  }
`;

const MobileLogo = styled(LogoIcon)<{ variant: LogoProps['variant']; $color: LogoProps['color'] }>`
  color: ${({ $color, theme }) => ($color ? theme.palette[$color] : theme.palette.black)};
  display: block;
  width: 45px;
  height: 25px;
  ${({ variant }) => variant === 'responsive' && showOnlyInDesktopStyle}
  ${({ variant }) =>
    variant === 'word' &&
    css`
      display: none;
    `}

    path {
    fill: currentColor;
  }
`;

export const LogoStyles = {
  Logo,
  MobileLogo,
};
