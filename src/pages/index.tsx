import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import OutfitBuilder from '../components/OutfitBuilder';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OutfitBuilder />
    </ThemeProvider>
  );
}
