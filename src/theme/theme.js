import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 40;
const MAIN_BORDER_RADIUS_VALUE = 4;
const MAIN_CARD_WIDTH = 278;
const MAIN_SPACING_VALUE = 16;

const cardBackgroundColorDark = '#2d2d2d';
const cardBackgroundColorLight = '#F5F5F5';
const headerBackgroundColorDark = '#333333';
const headerBackgroundColorLight = '#ffffff';
const headerTextColorDark = '#ffffff';
const headerTextColorLight = '#191919';
const newCasesBackgroundColor = '#FFEEAA';
const newCasesTextColor = '#212121';
const newDeathBackgroundColor = '#FF0000';
const newDeathTextColor = '#ffffff';
const paperBackgroundColorDark = '#212121';

export const lightTheme = createMuiTheme({
  border: {
    borderRadius: {
      base: `${MAIN_BORDER_RADIUS_VALUE}px`,
    },
  },
  cardWidth: `${MAIN_CARD_WIDTH}px`,
  color: {
    cardBackgroundColor: cardBackgroundColorLight,
    backgroundColor: headerBackgroundColorLight,
    newCasesBackgroundColor,
    newCasesTextColor,
    newDeathBackgroundColor,
    newDeathTextColor,
    textColor: headerTextColorLight,
  },
  customSpacing: {
    xSmall: `${MAIN_SPACING_VALUE / 2.66}px`,
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
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
  border: {
    borderRadius: {
      base: `${MAIN_BORDER_RADIUS_VALUE}px`,
    },
  },
  cardWidth: `${MAIN_CARD_WIDTH}px`,
  color: {
    cardBackgroundColor: cardBackgroundColorDark,
    backgroundColor: headerBackgroundColorDark,
    newCasesBackgroundColor,
    newCasesTextColor,
    newDeathBackgroundColor,
    newDeathTextColor,
    textColor: headerTextColorDark,
  },
  customSpacing: {
    xSmall: `${MAIN_SPACING_VALUE / 2.66}px`,
    small: `${MAIN_SPACING_VALUE / 2}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
});
