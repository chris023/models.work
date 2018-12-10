import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main:'#eda3a4',
    },
    secondary: {
      main:'#0d3d54'
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default Theme;

