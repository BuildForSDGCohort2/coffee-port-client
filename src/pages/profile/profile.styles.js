import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '30vh',
    background: 'linear-gradient(to bottom, #fff, #373B44)',
  },
  title: {
    paddingLeft: '15%',
    paddingTop: '4%',
    display: 'flex',
    alignItems: 'center',
  },
  details: {
    position: 'absolute',
    top: '210px',
    width: '60%',
    zIndex: '1',
    margin: '0% 20%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 74px rgba(25, 25, 25, 0.1)',
  },
});
export default useStyles;
