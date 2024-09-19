import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Blog from './Components/Pages/Blog/Blog'
import Coin from './Components/Pages/Coin/Coin'
import Home from './Components/Pages/Home/Home'

const App = () => {

  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
