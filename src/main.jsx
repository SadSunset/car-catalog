import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './assets/styles/global.css?i'
import { Home } from './components/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
