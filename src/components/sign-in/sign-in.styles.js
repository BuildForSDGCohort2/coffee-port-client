import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 20%',
  },
  title: {
    margin: '10% 1%',
    textAlign: 'center',
  },
  divider: {
    display: 'flex',
    justifyContent: 'center',
  },
  progress: {
    marginRight: '3%',
    color: 'white',
  },
  input: {
    color: 'white',
    marginTop: '3%',
  },
});

export default useStyles;
