import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 40;
const MAIN_SPACING_VALUE = 16;

const backgroundColorLight = '#ffffff';
const textColorLight = '#191919';

const theme = createMuiTheme({
  color: {
    backgroundColorLight,
    textColorLight,
  },
  customSpacing: {
    base: `${MAIN_SPACING_VALUE}px`,
  },
  logoSize: `${LOGO_SIZE}px`,
});

export default theme;
