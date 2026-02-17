import React from 'react'
import './index.css'
import Navbar from './components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import Cart from '../src/pages/Cart/Cart.jsx'
import PlaceOrder from '../src/pages/placeorder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx'
import Login from '../src/components/Login/Login.jsx'

const App = () => {
  const[isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <>
    {isLoggedIn ? <Login  setLogin={setIsLoggedIn} />:<></>}
    <div className='app'>
      <Navbar  setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
