import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
