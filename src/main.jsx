import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

console.log('Aplicação carregada!');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


