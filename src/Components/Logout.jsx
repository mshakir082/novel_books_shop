import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginSuccess, logoutSuccess } from '../redux/auth/authaction';

const Logout = () => {

    const dispatch = useDispatch() ;
    const navigate = useNavigate()

    useEffect(()=>{

        dispatch(logoutSuccess())
        navigate('/login')
        
    },[dispatch,navigate])


  return (
    <div>Logout</div>
  )
}

export default Logout