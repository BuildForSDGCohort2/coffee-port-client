import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, blue, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    borderRadius: '8px',
    borderWidth: '2px',
    margin: '2% 4%',
    fontFamily: 'ui-monospace',
    '&:focus': {
      backgroundColor: '#f5f5f5',
      borderColor: '#78909c',
    },

  },
  review: {
    marginLeft: '4%',
  },
  formfields: {
    width: '90%',
    borderRadius: '8px',
    borderWidth: '2px',
    margin: '2% 4%',
  },
  post: {
    alignItems: 'center',
    margin: '1% 4%',
  },
  list: {
    maxHeight: '100%',
    overflow: 'auto',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
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
