import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.color.backgroundColorLight,
    color: theme.color.textColorLight,
  },
  logo: {
    height: theme.logoSize,
    width: theme.logoSize,
  },
  titleWrapper: {
    marginLeft: '10px',
  },
}));