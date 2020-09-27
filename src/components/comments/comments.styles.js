import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, blue, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    borderRadius: '8px',
    borderWidth: '2px',
    margin: '2%',
    fontFamily: 'ui-monospace',
    '&:focus': {
      backgroundColor: '#f5f5f5',
      borderColor: '#78909c',
    },

  },
  post: {
    alignItems: 'center',
    marginTop: '-11%',
  },
  list: {
    maxHeight: '300px',
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
