import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  components: {
    // Apply global override to MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#007bff',
        },
      },
    },
  },
  spacing: 8,
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#007bff",
    },
  }
});

export default Theme;
