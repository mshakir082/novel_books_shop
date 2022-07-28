import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';


const Login = () => {

    const [mail,setMail] = useState("") ;

    const [password,setPassword] = useState("") ;

     //  let isAuth = useSelector((state)=>state.isAuth.isAuth)

     //  const status = localStorage.getItem("loginStatus") 

     //  isAuth = status
      

    const navigate = useNavigate()

//     const dispatch = useDispatch()
    // const isAuth = useSelector(state=>state.isAuth)
    let userData = JSON.parse(localStorage.getItem("userdata"))
    const handleSubmit =(userData)=>{

        let loginData = {
            username : mail ,
            password : password
        }
     //    console.log(loginData)
     //    fetchData(dispatch,loginData)
        if(mail == userData.email && password == userData.password){
          navigate("/")
        }
    }

//     useEffect(()=>{
//      if(isAuth){
//           localStorage.setItem("loginStatus",(isAuth))
//           navigate('/home')
//      }
//     },[isAuth])

  return (
   <>
        <center><h2>LOGIN</h2></center>

        <center>
             <input type='text' placeholder='enter username'  onChange={(e)=>setMail(e.target.value)}  /> <br></br>
             <input type='password'  placeholder='enter password' onChange={(e)=>setPassword(e.target.value)}  /> <br></br>
             <button onClick={()=>handleSubmit()}>SUBMIT</button>
        </center>
        <br></br>
        <center>
                <Link to='/register'>If Not a user,<br></br>Register here</Link>
        </center>
   </>
  )
}

export default Login