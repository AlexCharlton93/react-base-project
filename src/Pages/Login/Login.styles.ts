import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: 'red !important',
    margin: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(2),
    width: '100%',
  },
  image: {
    backgroundColor: 'grey',
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
}));

export const buttonStyle = {
  backgroundColor: { sm: "brown", md: "yellow" },
};
