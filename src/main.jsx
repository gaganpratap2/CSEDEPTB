import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Contextprovider from './Context/Context.jsx'


createRoot(document.getElementById('root')).render(
  <Contextprovider>
    <App />
  </Contextprovider>
)
