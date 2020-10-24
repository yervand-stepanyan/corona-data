import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.color.backgroundColorLight,
    color: theme.color.textColorLight,
  },
  logoTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
  },
  logo: {
    height: theme.logoSize,
    width: theme.logoSize,
  },
  titleWrapper: {
    marginLeft: theme.customSpacing.base,
  },
}));
