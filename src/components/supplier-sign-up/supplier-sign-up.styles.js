import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 3),
    textAlign: 'center',
  },
  progress: {
    color: 'white',
    marginRight: '3%',
  },
  country: {
    height: '75%',
    color: 'grey',
    width: '100%',
    marginTop: '29px',
  },
  phone: {
    height: '100%',
    marginTop: '4%',
    '& input': {
      height: '33px',
      color: 'grey',
    },
  },
}));

export default useStyles;
