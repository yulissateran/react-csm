const breakpoints = {
  mobile: '320px',
  mobileM: '480px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

export const theme = {
  zIndex: {
    modal: 2000,
  },
  breakpoints,
  spacing: {
    spacing1: '4px',
    spacing2: '8px',
    spacing3: '12px',
    spacing4: '16px',
    spacing5: '24px',
    spacing6: '32px',
    spacing7: '40px',
    spacing8: '48px',
    spacing9: '56px',
    spacing10: '64px',
    spacing11: '72px',
  },
  mediaQueries: {
    mobile: `@media (min-width: ${breakpoints.mobile})`,
    mobileM: `@media (min-width: ${breakpoints.mobileM})`,
    tablet: `@media (min-width: ${breakpoints.tablet})`,
    laptop: `@media (min-width: ${breakpoints.laptop})`,
  },
  palette: {
    primary: '#5865f2',
    gray: '#99aab5',
    grayLigth: '#ebedef',
    darkNotBlack: '#2c2f33',
    focusBorder: '#00b0f4',
    statusGreen: '#43b581',
    textLink: '#00b0f4',
    offWhite: '#fafafa',
    white: '#fff',
    notQuiteBlack: '#23272a',
    black: '#000',
    ekkoRed: '#de2761',
  },
};

export type CMSTheme = typeof theme;
