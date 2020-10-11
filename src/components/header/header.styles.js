import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none',
    borderBottom: 'solid',
    borderBottomColor: '#546e7a22',
    borderWidth: 'thin',
  },
  link: {
    textDecoration: 'none',
    fontStyle: 'none',
    color: '#ffffff',
    paddingRight: theme.spacing(4),
  },
  linkText: {
    fontWeight: 400,
    color: '#546e7a',
  },
}));

export default useStyles;
