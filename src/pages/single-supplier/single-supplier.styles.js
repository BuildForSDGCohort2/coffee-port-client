import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: '5% 12%',
    width: '76%',
  },
  content: {
    margin: '3% 10%',
  },
  title: {
    paddingLeft: '15%',
    paddingTop: '4%',
    display: 'flex',
    alignItems: 'center',
  },
  subtitle: {
    paddingLeft: '15%',
  },
  rating: {
    paddingLeft: '15%',
  },
  block: {
    height: '30vh',
    background: 'linear-gradient(to top, #fff, #F9B934)',
  },
  estimate: {

    fontSize: '40px',
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  stat: {
    fontSize: '210px',
    zIndex: '-1',
    textAlign: 'center',
    height: '100%',
    overflow: 'hidden',
    color: 'rgba(192,192,192,0.2)',
    margin: '0',
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  secondBlock: {
    position: 'relative',
    textAlign: 'center',
    margin: '0',
    backgroundColor: '#f0f0f0',
  },
  achievements: {
    paddingTop: '2%',
  },
  thirdBlock: {
    position: 'absolute',
    top: '210px',
    width: '90%',
    zIndex: '1',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 74px rgba(25, 25, 25, 0.1)',
  },
  fourthBlock: {
    marginTop: '5%',
  },
});
export default useStyles;
