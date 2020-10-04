import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '14%',
    paddingTop: '5%',
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
  subtitle: {
    color: theme.palette.secondary.main,
    marginTop: '3%',
    marginBottom: '3%',
  },
  description: {
    color: '#2e3e45',
    paddingTop: '3%',
    paddingBottom: '5%',
    fontSize: '20px',
  },

}));

export default useStyles;
