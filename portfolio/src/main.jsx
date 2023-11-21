import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home'
import './index.css'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header /> 
  <Home />
  <About />
  <Portfolio />
  <Skills />
 <Experience />
 <Footer />
  </React.StrictMode>,
)
