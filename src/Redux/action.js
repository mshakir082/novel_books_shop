import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType';
import { ADD_CART_DATA_REQUEST,ADD_CART_DATA_SUCCESS,ADD_CART_DATA_FAILURE,FETCH_CART_SUCCESS } from "./actionType";
import { DELETE_CART_DATA_REUEST,DELETE_CART_DATA_SUCCESS,DELETE_CART_DATA_FAILURE} from "./actionType";
import {  USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionType";
import axios from 'axios'
export const getProducts = (payload,q) => dispatch =>{
 
    dispatch({type: GET_NOVELS_REQUEST})
    return axios.get(`http://localhost:8080/history?_limit=8`,payload)
    .then((r)=>{
        dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
        return GET_NOVELS_SUCCESS
    })
    .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
  }
  

  export const getRomanse = (payload) => dispatch =>{
  
      dispatch({type: GET_NOVELS_REQUEST})
      return axios.get("http://localhost:8080/romance", {
      params:{
     ...payload,
        _limit:8
    }})
      .then((r)=>{
          dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
          return GET_NOVELS_SUCCESS
      })
      .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
    }
    

    export const getScience = (payload) => dispatch =>{
      
        dispatch({type: GET_NOVELS_REQUEST})
        return axios.get("http://localhost:8080/science", {
        params:{
       ...payload,
          _limit:8
      }})
        .then((r)=>{
            dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
            return GET_NOVELS_SUCCESS
        })
        .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
      }

     export const getMystery = (payload) => dispatch =>{
        
          dispatch({type: GET_NOVELS_REQUEST})
          return axios.get("http://localhost:8080/mystery", {
          params:{
         ...payload,
            _limit:8
        }})
          .then((r)=>{
              dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
              return GET_NOVELS_SUCCESS
          })
          .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
        }
        

        export const getHorror= (payload) => dispatch =>{
        
          dispatch({type: GET_NOVELS_REQUEST})
          return axios.get("http://localhost:8080/horror", {
          params:{
         ...payload,
            _limit:8
        }})
          .then((r)=>{
              dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
              return GET_NOVELS_SUCCESS
          })
          .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
        }

        export const addProductCart =(payload) => dispatch =>{
          dispatch({type: ADD_CART_DATA_REQUEST})
          return axios.post(`http://localhost:8080/cart`,payload)
          .then((r)=>dispatch({type:ADD_CART_DATA_SUCCESS,payload:r.data}))
          .catch((err) =>dispatch({type:ADD_CART_DATA_FAILURE,payload:err}))
        }
        
        
        export const fetchCart =() => dispatch =>{
        dispatch({type: ADD_CART_DATA_REQUEST})
        return axios.get(` http://localhost:8080/cart`)
        .then((r)=>dispatch({type:FETCH_CART_SUCCESS,payload:r.data}))
        .catch((err) =>dispatch({type:ADD_CART_DATA_FAILURE,payload:err}))
        }

        export const deleteProductCart = (id) => dispatch =>{

          dispatch({type:DELETE_CART_DATA_REUEST})
          return axios.delete(`http://localhost:8080/cart/${id}`)
          .then(r=>dispatch({type:DELETE_CART_DATA_SUCCESS,payload:r.data}))
          .then(()=>dispatch(fetchCart()))
          .catch((err) =>dispatch({type:DELETE_CART_DATA_FAILURE,payload:err}))
          }

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