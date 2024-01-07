import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { RentContextProvider } from "./context/RentContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RentContextProvider>
        <App />
    </RentContextProvider>
  </React.StrictMode>
)
