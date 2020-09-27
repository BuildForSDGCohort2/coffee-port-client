import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    marginTop: theme.spacing(8),
    background: '#f7f9fa',
    width: '700px',
  },

  eachCombo: {
    margin: theme.spacing(2),
  },
  eachInput: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(4),
    color: '#121037',
  },


}));

export default useStyles;