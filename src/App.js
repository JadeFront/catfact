import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Catfact from './component/Catfact';

function App() {
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    }
  }});
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Catfact/>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
