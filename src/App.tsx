import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';
import { theme } from './constant/theme';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import { requestNotificationPermission } from './firebase';

function App() {
  useEffect(() => {
    const checkPermission = async () => {
      await requestNotificationPermission();
    };

    checkPermission();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
