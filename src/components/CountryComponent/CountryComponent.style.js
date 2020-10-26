import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cardContainer: {
    backgroundColor: theme.color.cardBackgroundColor,
    margin: theme.customSpacing.small,
  },
  caseWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.customSpacing.base,
    marginTop: theme.customSpacing.small,
  },
  dataWrapper: {
    marginLeft: theme.customSpacing.base,
  },
  newCasesWrapper: {
    backgroundColor: theme.color.newCasesBackgroundColor,
    borderRadius: theme.border.borderRadius.base,
    padding: `0 ${theme.customSpacing.xSmall}`,
    color: theme.color.newCasesTextColor,
  },
  deathDataWrapper: {
    backgroundColor: theme.color.newDeathBackgroundColor,
    borderRadius: theme.border.borderRadius.base,
    padding: `0 ${theme.customSpacing.xSmall}`,
    color: theme.color.newDeathTextColor,
  },
}));
