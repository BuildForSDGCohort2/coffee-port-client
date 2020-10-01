import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    paddingLeft: '15%',
    paddingTop: '4%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '20%',
    },
  },
  root: {
    marginTop: '5%',
  },
}));
export default useStyles;
