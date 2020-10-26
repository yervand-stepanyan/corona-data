import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  showDataContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.customSpacing.base,
    padding: `0 ${theme.customSpacing.small}`,
  },
  showDataTitleWrapper: {
    textAlign: 'center',
  },
  dataWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.customSpacing.base,
  },
}));
