import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './assets/styles/global.css?i'
import { Home } from './components/home/Home.jsx'
import { Router } from './components/ui/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
