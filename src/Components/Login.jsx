import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, loginFailure, loginSuccess} from "../redux/auth/authaction"

const Login = () => {

const [email,setEmail] = useState("eve.holt@reqres.in") ;
const [password,setPassword] = useState("cityslicka")

const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()
const comingFrom = location.state?.from?.pathname || "/"

const handleLogin =(e) =>{
  e.preventDefault() ;

  let userData = {
    email : email,
    password: password
  }

  if(email && password)
  {
    dispatch(login(userData))
    .then((r)=>{
      console.log(r.data)
      dispatch(loginSuccess(r.data))
      navigate(comingFrom,{replace:true})
  })
  .catch((e)=>{
      console.log(e) ;
      dispatch(loginFailure())
  })
  }
 
}
  return (
      <>
        <center>
        <h1>LOGIN</h1>
        <br/>
        <br/>
          <form onSubmit={handleLogin}>
            <div>
              <input placeholder='enter email here' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} style={{border:"1px solid black"}}/>
            </div>
            <br/>
            <div>
              <input placeholder='enter password here' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{border:"1px solid black"}} />
            </div>
            <br/>
            <button type='submit' style={{color:"red", border:"2px solid black"}} >LOGIN</button>
          </form>
        </center>
      </>
  )
}

export default Login