import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '210px',
    width: '60%',
    zIndex: '1',
    margin: '0% 20%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 74px rgba(25, 25, 25, 0.1)',
  },
  title: {
    textAlign: 'justify',
  },
  label: {
    textAlign: 'center',
  },
});
export default useStyles;
