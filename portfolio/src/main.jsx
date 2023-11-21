import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home'
import './index.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header /> 
  <Home />
  <About />
  <Portfolio />
  <Skills />
  </React.StrictMode>,
)
