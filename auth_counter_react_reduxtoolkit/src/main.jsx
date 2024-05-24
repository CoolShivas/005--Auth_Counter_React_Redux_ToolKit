import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { Provider } from "react-redux";
import counterConfigStore from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={counterConfigStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
