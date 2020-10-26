import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  dropdownContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: theme.customSpacing.base,
    padding: `0 ${theme.customSpacing.small}`,
  },
  dropdownTitleWrapper: {
    textAlign: 'center',
  },
  dropdownWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.customSpacing.base,
    width: '90%',
    '@media only screen and (min-width: 600px)': {
      width: '60%',
    },
    '@media only screen and (min-width: 768px)': {
      width: '50%',
    },
    '@media only screen and (min-width: 992px)': {
      width: '40%',
    },
  },
  dropdown: {
    width: '100%',
  },
  buttonWrapper: {
    marginTop: theme.customSpacing.base,
  },
}));
