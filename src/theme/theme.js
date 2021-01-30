import { createMuiTheme } from '@material-ui/core';

const CARD_WIDTH = 298;
const LOGO_SIZE = 40;
const MAIN_BORDER_RADIUS_VALUE = 4;
const MAIN_SPACING_VALUE = 16;
const OPTION_HEIGHT = 28;

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
  cardWidth: `${CARD_WIDTH}px`,
  color: {
    backgroundColor: headerBackgroundColorLight,
    cardBackgroundColor: cardBackgroundColorLight,
    newCasesBackgroundColor,
    newCasesTextColor,
    newDeathBackgroundColor,
    newDeathTextColor,
    textColor: headerTextColorLight,
  },
  customSpacing: {
    small: `${MAIN_SPACING_VALUE / 2}px`,
    smaller: `${(MAIN_SPACING_VALUE * 3) / 4}px`,
    base: `${MAIN_SPACING_VALUE}px`,
    large: `${MAIN_SPACING_VALUE * 2}px`,
    xLarge: `${MAIN_SPACING_VALUE * 3}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
  optionHeight: `${OPTION_HEIGHT}px`,
});

export const darkTheme = createMuiTheme({
  ...lightTheme,
  palette: {
    type: 'dark',
    background: {
      paper: paperBackgroundColorDark,
    },
  },
  color: {
    ...lightTheme.color,
    backgroundColor: headerBackgroundColorDark,
    cardBackgroundColor: cardBackgroundColorDark,
    textColor: headerTextColorDark,
  },
});
