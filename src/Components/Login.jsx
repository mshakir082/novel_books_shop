import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, loginFailure, loginSuccess} from "../Redux/auth/authaction"
import Shree from './img/Shree.jpg'
import {mobile} from "./Res";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${Shree})
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

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
      <Container>
            <Wrapper>
               <Title>LOGIN</Title>
               <Form onSubmit={handleLogin}>
                 <Input  placeholder='enter email here' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}  />
                 <Input placeholder='enter password here' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
                 <Button type='submit' >LOGIN</Button>
                 <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                 <Link>CREATE A NEW ACCOUNT</Link>
               </Form>
             </Wrapper>
           </Container>
        {/* <center>
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
        </center> */}
      </>
  )
}

export default Login


// 
// import {mobile} from "../responsive";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Login = () => {
//   return (
//    
//   );
// };

// export default Login;