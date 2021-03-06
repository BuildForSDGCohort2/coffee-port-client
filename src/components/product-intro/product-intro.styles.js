import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: '#121037',
    fontWeight: 700,
  },
  container: {


    paddingLeft: '10%',
    paddingRight: '10%',
    marginTop: '5%',
  },
  description: {
    color: '#546e7a',
  },
  link: {
    color: '#3f51b5',
    fontWeight: 700,
  },
  icon: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(4),
  },

}));
export default useStyles;
