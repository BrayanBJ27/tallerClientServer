import React from 'react';
import { createRoot } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap aquí
import App from './App';

const container = document.getElementById('root');

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
