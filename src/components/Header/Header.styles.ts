import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navLink: {
    '&:hover': {
      color: 'white',
    },
    textDecoration: 'unset',
    color: 'white',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
