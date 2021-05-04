import Routes from 'Routes';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-ui/core/styles';
import { colors } from 'utils/styles';
import theme from './theme';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme(colors.primary, colors.secondary)}>
        <Routes />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
