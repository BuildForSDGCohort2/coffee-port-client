import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  requestorInfo: {
    background: theme.palette.secondary.main,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
