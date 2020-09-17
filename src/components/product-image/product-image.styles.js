import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  image: {
    backgroundImage: 'url(https://ictcoffee.com/wp-content/uploads/2019/06/green-coffee-beans.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '32vh',
  },
  icons: {
    color: '#2196f3',
    padding: '2%',
  },
  links: {
    padding: '2%',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '6%',
  },
  buttonContainer: {
    paddingTop: '6%',
  },
  divider: {
    marginTop: '3vh',
  },
});
export default useStyles;
