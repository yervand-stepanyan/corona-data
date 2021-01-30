import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContainer: {
    backgroundColor: theme.color.cardBackgroundColor,
    margin: theme.customSpacing.small,
    minWidth: theme.cardWidth,
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.customSpacing.small,
    padding: `0 ${theme.customSpacing.base}`,
  },
  optionsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  dataWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
  },
  optionItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    height: theme.optionHeight,
    marginBottom: theme.customSpacing.small,
  },
  dataItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: theme.optionHeight,
    marginBottom: theme.customSpacing.small,
  },
  newCasesWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.color.newCasesBackgroundColor,
    borderRadius: theme.border.borderRadius.base,
    boxSizing: 'border-box',
    color: theme.color.newCasesTextColor,
    padding: `0 ${theme.customSpacing.small}`,
    width: '100%',
  },
  deathsDataWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: theme.color.newDeathBackgroundColor,
    borderRadius: theme.border.borderRadius.base,
    boxSizing: 'border-box',
    color: theme.color.newDeathTextColor,
    padding: `0 ${theme.customSpacing.small}`,
    width: '100%',
  },
}));
