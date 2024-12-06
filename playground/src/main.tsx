import './lara-dark-indigo-theme.scss';
import './lara-light-indigo-theme.scss';
import 'virtual:uno.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
