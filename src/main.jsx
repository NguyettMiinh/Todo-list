import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/assets/styles/index.css';
// import { Provider } from 'react-redux';
// import {store} from './redux/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
