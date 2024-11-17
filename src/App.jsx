import React from 'react'
import NavBar from './componts/navBar/NavBar.jsx'
import Header from './componts/Header/Header.jsx'
import Footer from './componts/footer/Footer.jsx'
import './App.css'


const App = () => {
  return (
    <>
    <div className="app">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
    </>
  )
}

export default App
