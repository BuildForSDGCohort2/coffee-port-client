import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '210px',
    width: '70%',
    zIndex: '1',
    margin: '0% 15%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 74px rgba(25, 25, 25, 0.1)',
  },
  title: {
    textAlign: 'center',
    margin: '4%',
  },
  label: {
    textAlign: 'center',
  },
  buttons: {
    textAlign: 'center',
  },
  progress: {
    marginRight: '3%',
  },
  helper:{
    marginLeft: '20%',
  }
});
export default useStyles;
