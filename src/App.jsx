import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/store';
import Product from './pages/product';
import PlaceOrder from './pages/placeorder';
import Orders from './pages/orders';
import Login from './pages/login';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import About from './pages/about';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
