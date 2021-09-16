import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#124f8f',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    white: {
      main: '#000',
    },
   
  },
  typography: {
    fontFamily: '"Lato", "Normal", sans-serif',
}
});

export default theme;