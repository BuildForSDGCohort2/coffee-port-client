import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    margin: theme.spacing(3),
    left: '15%',
  },

  productName: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },
  title: {
    textAlign: 'center',
    paddingTop: '6%',
    color: theme.palette.secondary.main,
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
