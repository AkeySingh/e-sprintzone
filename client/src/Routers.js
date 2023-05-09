import React from 'react'
import MainHeader from './components/Header'
import MainFooter from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import ProductDetails from './components/ProductDetails'

//-------------------admin Routes ----------------------------------------------------
import AdminHeader from './admin/AdminHeader/AdminHeader'
import Demo from './admin/AdminHeader/Demo'

const RouterPage = () => {
  const location_route = useLocation()
  const isPublic = location_route.pathname.includes('admin')
  return (
    <>
      {isPublic ? (
        <>
          <AdminHeader />
          <Routes>
            <Route path='/admin/null' element={<Demo />} />
            <Route path='/admin/null' element={<Demo />} />
          </Routes>
        </>
      ) : (
        <>
          <MainHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <MainFooter />
        </>
      )}
    </>
  )
}

export default RouterPage
