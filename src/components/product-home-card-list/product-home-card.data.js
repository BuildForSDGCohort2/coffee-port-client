import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },

  title: {
    color: theme.palette.text.primary,
    fontWeight: 700,
  },
}));

export default useStyles;
