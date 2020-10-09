import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
    display: 'flex',
    minHeight: '250px',
    boxShadow: ` 0 6px 10px 0 rgba(0, 0, 0, 0.14),
    0 1px 18px 0 rgba(0, 0, 0, 0.12),
    0 3px 5px -1px rgba(0, 0, 0, 0.12)`,
    '&:hover': {
      boxShadow: `6px 7px 31px -2px rgba(176,176,176,0.74)`,
      transition: 'all 0.8s',
    },

  },
  wide: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;
