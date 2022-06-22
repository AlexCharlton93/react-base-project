import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

const Theme = createTheme({
  components: {
    // Apply global override to MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#007bff',
        },
      },
      // Used to declare a custom variant for MuiButtons
      // For typescript you need to declare the module first, see lines 3-7
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            color: 'white',
            backgroundColor: '#FFFFF'
          },
        },
      ],
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
