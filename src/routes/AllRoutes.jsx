import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../Components/Home'
import Login from '../Components/Login'
import Logout from '../Components/Logout'
import Navbar from '../Components/Navbar'
import PrivateAuth from '../Components/PrivateAuth'

import Register from '../Components/Register'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <>
        <Navbar/>

        <Routes>
        <Route path="/" element={

 <PrivateAuth>
     <Home/>
 </PrivateAuth>
   
        
        }/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/logout" element={<Logout/>}/> 
    </Routes>

    </>
  )
}

export default AllRoutes