import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  showDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.customSpacing.base,
    padding: `0 ${theme.customSpacing.small} ${theme.customSpacing.large}`,
  },
  showDataTitleWrapper: {
    textAlign: 'center',
  },
  filtersIconWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: theme.customSpacing.base,
  },
  dataWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.customSpacing.base,
  },
}));
