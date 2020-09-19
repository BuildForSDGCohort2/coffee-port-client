import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    fontStyle: 'none',
    color: '#ffffff',
    paddingRight: theme.spacing(4),
  },
  linkText:{
    fontWeight: 400,
    color: '#546e7a',
  }
}));

export default useStyles;
