import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.color.backgroundColor,
    color: theme.color.textColor,
  },
  logoIconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.customSpacing.smaller}`,
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
  icon: {
    color: theme.color.textColor,
  },
}));
