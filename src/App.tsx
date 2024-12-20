import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import { theme } from './constant/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
