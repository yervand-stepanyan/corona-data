import { createMuiTheme } from '@material-ui/core';

const LOGO_SIZE = 40;

const backgroundColorLight = '#ffffff';
const textColorLight = '#191919';

const theme = createMuiTheme({
  logoSize: `${LOGO_SIZE}px`,
  color: {
    backgroundColorLight,
    textColorLight,
  },
});

export default theme;
