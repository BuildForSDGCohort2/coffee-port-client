import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  topGrid: {
    height: '500px',
    width: '100%',

  },
  mainText: {
    fontSize: '52px',
    color: '#121037',
    fontWeight: 600,

  },
  topButtons: {
    marginTop: theme.spacing(2),
  },
  secondText: {
    fontSize: '52px',
    color: '#F9B934',
    fontWeight: 600,
  },
  buttonContainer: {
    marginRight: theme.spacing(4),

  },



}));

export default useStyles;
