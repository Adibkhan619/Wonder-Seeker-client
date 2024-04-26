import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './components/root/router/Router'
import { Helmet } from 'react-helmet'
import AuthProvider from './components/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helmet></Helmet>
    <AuthProvider>
        <RouterProvider router={Router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
