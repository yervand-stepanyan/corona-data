import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 40;
const MAIN_SPACING_VALUE = 16;

const headerBackgroundColorLight = '#ffffff';
const headerTextColorLight = '#191919';
const headerBackgroundColorDark = '#333333';
const headerTextColorDark = '#ffffff';
const paperBackgroundColorDark = '#212121';

export const lightTheme = createMuiTheme({
  color: {
    backgroundColor: headerBackgroundColorLight,
    textColor: headerTextColorLight,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: paperBackgroundColorDark,
    },
  },
  color: {
    backgroundColor: headerBackgroundColorDark,
    textColor: headerTextColorDark,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
});
