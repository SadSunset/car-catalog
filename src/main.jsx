import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './assets/styles/global.css?i'
import { Home } from './components/home/Home.jsx'
import { Router } from './components/ui/Router.jsx'
import { AuthProvider } from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
)
