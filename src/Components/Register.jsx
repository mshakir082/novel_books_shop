// import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';



const Register = () => {
    // const registerAuth = useSelector((state)=> state.isAuth.registerAuth)
    // console.log(registerAuth)
    // console.log(data)
    const navigate = useNavigate() ;

    const [Name,setName] = useState("") ;
    const [userMail,setUserMail] = useState("") ;
    const [userPassword,setUserPassword] = useState("") ;
    const [userMobile,setUserMobile] = useState("") ;
    const [userDescription,setUserdescription] = useState("") ;
    const [userName,setUsername] = useState("") ;

    // const dispatch = useDispatch()

    // useEffect(()=> {
    //     if(registerAuth)
    //     {
    //          navigate('/')
    //     }
    //    },[registerAuth])

    const handleSubmit =(e)=>{
        let userData = {
            name: Name,
            email : userMail,
            password : userPassword,
            username : userName,
            mobile : userMobile,
            description : userDescription
        }
        console.log(userData)

        if(userMail!=="" && userPassword !=="" && Name!=="" && userName!=="" && userMobile!=="" && userDescription!=="")
        {
            localStorage.setItem("userdata",JSON.stringify(userData))
        }
        else{
            alert("Fill Complete Data")
        }
    }

  return (
      <>
            <center><h2>REGISTER</h2></center>
            <center>
            <input type='text' placeholder='enter email' onChange={(e)=>setUserMail(e.target.value)}/> <br></br>
            <input type='password' placeholder='enter password' onChange={(e)=>setUserPassword(e.target.value)}/> <br></br>
            <input type='text' placeholder='enter name' onChange={(e)=>setName(e.target.value)}/> <br></br>
            <input type='text' placeholder='enter username' onChange={(e)=>setUsername(e.target.value)}/> <br></br>
            <input type='number' placeholder='enter mobile' onChange={(e)=>setUserMobile(e.target.value)}/> <br></br>
            <input type='text' placeholder='enter description' onChange={(e)=>setUserdescription(e.target.value)}/> <br></br>
            <button onClick={()=>handleSubmit()}>SUBMIT</button>
            </center>
      </>
  )
}

export default Register
