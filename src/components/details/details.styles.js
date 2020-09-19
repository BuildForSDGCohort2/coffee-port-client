import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    margin: 'auto',
    marginTop: '-6%',
    zIndex: '10',
    left: '15%',
  },
  title: {
    textAlign: 'center',
    paddingTop: '6%',
    color: 'grey',
  },
  image: {
    backgroundImage: 'url(../../assets/coffeebeans.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '32vh',
  },
  contain: {
    padding: '4%',
  },
  icons: {
    color: '#2196f3',
    padding: '2%',
  },
  formfields: {
    width: '90%',
    margin: '5%',
  },
  buttonContainer: {
    height: '50px',
    background: 'red',
  },
  paper: {
    padding: theme.spacing(4, 5),
    diplay: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
export default useStyles;
