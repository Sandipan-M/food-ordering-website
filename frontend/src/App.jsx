import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import RegisterRestaurant from './pages/registerrestaurant/RegisterRestaurant'
import Footer from './components/footer/footer'
import LoginPopUp from './components/loginpopup/LoginPopUp'
import RegisterDeliveryPartner from './pages/registerdeliverypartner/RegisterDeliveryPartner'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  
  return (
    <>

      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/registerrestaurant' element={<RegisterRestaurant />} />
          <Route path='/registerdeliverypartner' element={<RegisterDeliveryPartner />} />
        </Routes>
      </div>
      <Footer />
      </>
  )
}

export default App