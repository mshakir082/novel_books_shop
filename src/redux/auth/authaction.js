import axios from "axios";
import {  USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionTypes";


export const loginRequest = ()=>({
    type : USER_LOGIN_REQUEST,
})

export const loginSuccess = (data)=>({
    type : USER_LOGIN_SUCCESS,
    payload : data
})

export const logoutSuccess = (data)=>({
    type : USER_LOGOUT_SUCCESS,
    payload : data
})

export const loginFailure = ()=>({
    type : USER_LOGIN_FAILURE,
})

export const login =(payload)=>(dispatch)=>{

   dispatch(loginRequest())
   return axios.post('https://reqres.in/api/login',payload)
   
}
