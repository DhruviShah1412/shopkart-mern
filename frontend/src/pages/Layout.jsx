import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'

const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Layout