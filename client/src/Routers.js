import React from 'react'
import MainHeader from './components/Header'
import MainBanner from './components/Banner'
import MainTopProduct from './components/ToProducts'
import MainFooter from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/HomePages/Home'
// import SignUp from './components/'

const RouterPage = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
      <MainFooter />
    </>
  )
}

export default RouterPage
