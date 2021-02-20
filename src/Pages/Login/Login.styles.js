import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(1),
  },
  form: {
    marginTop: theme.spacing(1),
    width: '100%',
  },
  image: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundImage: 'url(/login-image.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  paper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(8, 4),
  },
  root: {
    height: '100vh',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
