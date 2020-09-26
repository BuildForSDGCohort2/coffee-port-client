import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 3),
    textAlign: 'center',
  },
  country: {
    height: '33px',
    width: '100%',
    marginTop: '5%',
    color: 'grey',
  },
  progress: {
    marginRight: '3%',
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
