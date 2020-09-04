import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
  },
  paper: {
    padding: theme.spacing(4, 4),
    diplay: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
}));
export default useStyles;
