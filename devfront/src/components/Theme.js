import { createMuiTheme } from '@material-ui/core/styles';

const purplepink = '#F04393';
const yellow = '#F9C449';
const arcGrey = '#3A3B3C';

export default createMuiTheme({
  palette: {
    common: {
      purple: `${purplepink}`,
      yellow: `${yellow}`,
    },
    primary: {
      main: `${purplepink}`,
    },
    secondary: {
      main: `${yellow}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '0.9rem',
    },
    h4: {
      fontFamily: 'Raleway',
      color: arcGrey,
      fontWeight: 700,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontSize: '1.2rem',
      color: arcGrey,
      fontWeight: 400,
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {},
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${purplepink}`,
        },
      },
    },
  },
});
