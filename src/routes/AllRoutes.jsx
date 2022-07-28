import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../Components/Home'
import Login from '../Components/Login'
// import Logout from '../Components/Logout'
import Navbar from '../Components/Navbar'

import Register from '../Components/Register'

const AllRoutes = () => {
  return (
    <>
        {/* <Navbar/> */}

        <Routes>
            <Route path='/' element={<Login/>} />
            {/* <Route path='/logout' element={<Logout/>} /> */}

            <Route path='/register' element={<Register/>} />
        </Routes>
    </>
  )
}

export default AllRoutes