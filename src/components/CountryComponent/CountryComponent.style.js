import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  countryComponentContainer: {
    display: 'flex',
  },
  newCasesWrapper: {
    marginLeft: theme.customSpacing.base,
  },
  lastUpdateWrapper: {
    marginLeft: theme.customSpacing.base,
  },
}));
