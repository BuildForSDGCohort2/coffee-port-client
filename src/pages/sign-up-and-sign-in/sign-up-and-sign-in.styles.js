import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: '80%',
  //   margin: 'auto',
  //   marginTop: '5%',
  // },
  paper: {
    padding: theme.spacing(4, 0),
    width: '50%',
    margin: '3% 25%',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  cardContent: {
    padding: '0px',
    '&:last-child': {
      paddingBottom: '0px',
    },
  },
  link: {
    marginTop: '6%',
  },
}));
export default useStyles;
