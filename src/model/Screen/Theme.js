import { createMuiTheme } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: pink,
  },
  typography: {
    useNextVariants: true,
  },
});

theme.palette.primary.main = pink[400];

export {
  theme,
}