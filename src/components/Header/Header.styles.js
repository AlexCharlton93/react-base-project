import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navLink: {
    '&:hover': {
      color: 'white',
      textDecoration: 'none',
    },
    color: 'white',
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
