// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { logout } from '../redux/actions'

// const Logout = () => {

//     const isAuth = useSelector((state)=> state.isAuth.isAuth)

//     const dispatch = useDispatch() ;
//     const navigate = useNavigate()

//     useEffect(()=>{

//         const LogoutAction = logout(null) ;
//         dispatch(LogoutAction) ;
//         navigate('/') 
//     })

//   return (
//     <div>Logout</div>
//   )
// }

// export default Logout