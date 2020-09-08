import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 3),
  },

  submit: {
    margin: theme.spacing(4, 0, 2),
  },
  externalButton: {
    backgroundColor: 'white',
    color: 'black',
    margin: theme.spacing(1, 0, 2),
  },
}));

export default useStyles;
