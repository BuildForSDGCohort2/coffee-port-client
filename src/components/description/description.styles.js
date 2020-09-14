import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '4%',
    width: '70%',
    marginLeft: '15%',
  },
  paper: {
    padding: theme.spacing(4, 5),
    diplay: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabs: {
    borderBottom: '1px solid #e8e8e8',
  },
}));
export default useStyles;
