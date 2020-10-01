import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, blue, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
}));

export default useStyles;
