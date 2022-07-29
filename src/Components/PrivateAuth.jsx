import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation} from 'react-router-dom';

const PrivateAuth = ({children}) => {

    const auth = useSelector((state)=>state.authReducer.isAuth)
    console.log(auth) ;

    const location = useLocation() ;

    if(!auth){
       return <Navigate to='/login' state={{from:location}} replace />
    }
   else {
        return children
   }
}

export default PrivateAuth