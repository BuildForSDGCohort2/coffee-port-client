import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    minHeight: '50px',
  },
  root: {
    display: 'flex',
    minHeight: '20vh',
    flexDirection: 'column',
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(8),
  },
  text: {
    color: '#121037',
    fontWeight: 600,
  },

}));

export default useStyles;
