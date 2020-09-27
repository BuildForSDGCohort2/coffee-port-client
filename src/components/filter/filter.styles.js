import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    background: '#f7f7f7',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  filterText: {
    fontWeight: 700,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
