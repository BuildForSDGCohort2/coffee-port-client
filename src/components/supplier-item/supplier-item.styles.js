import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '99%',
  },
  title: {
    color: '#121037',
    fontWeight: 600,
  },
}));

export default useStyles;
