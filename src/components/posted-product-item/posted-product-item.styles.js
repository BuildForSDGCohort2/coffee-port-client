import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    textAlign: 'center',
    margin: '2% 10%',
    width: '80%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  companyName: {
    color: theme.palette.grey[400],
    flexGrow: 1,
  },
}));

export default useStyles;
