import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Shop from './pages/Shop';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ShopDetails from './pages/ShopDetails';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import AddProduct from './Admin/AddProduct'
import Profile from './pages/Profile';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<ShopDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="manage-product" element={<AddProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App