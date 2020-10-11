import { makeStyles } from '@material-ui/core/styles';
import {
  deepPurple, blue, deepOrange,
} from '@material-ui/core/colors';
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
    backgroundColor: '#880e4f',
  },
  red: {
    backgroundColor: '#d50000',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  green: {
    backgroundColor: '#004d40',
  },
  blueGray: {
    backgroundColor: '#607d8b',
  },
  teal: {
    backgroundColor: '#009688',
  },
  progress: {
    marginRight: '3%',
    color: 'white',
  },
}));

export default useStyles;
