import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 3),
  },
  submit: {
    // margin: theme.spacing(4, 0, 2),
    color: 'white',
  },
  externalButton: {
    backgroundColor: 'white',
    color: 'black',
    margin: theme.spacing(1, 0, 2),
  },
  icon: {
    height: '5vh',
    paddingRight: '4%',
  },
}));

export default useStyles;
