import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: 'auto',
    marginTop: '-6%',
    zIndex: '10',
    left: '15%',
  },
  listAvatar: {
    backgroundColor: 'rgba(0, 0, 0, 0.09)',
    margin: '2%',
    borderRadius: '4%',
  },
  primary: {
    fontWeight: '700',
  },
  trailing: {
    fontSize: '0.875rem',
    color: 'grey',
  },
});
export default useStyles;
