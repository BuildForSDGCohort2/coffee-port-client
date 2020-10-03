import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(4),
    marginTop: theme.spacing(4),
    borderRadius: '20px',
    background: '#f7f9fa',
    width: '600px',
  },
  title: {
    marginTop: theme.spacing(0),

  },
  label: {
    color: theme.palette.grey[500],
    flexGrow: 1,
  },
  eachCombo: {
    margin: theme.spacing(2),
    marginTop: theme.spacing(0),

  },
  eachInput: {
    marginLeft: theme.spacing(2), 
  },
  buttonContainer: {
    margin: theme.spacing(2),
  },
  button: {
    flexGrow: 1,
  },
}));

export default useStyles;
