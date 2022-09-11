import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType'
import { ADD_CART_DATA_REQUEST,ADD_CART_DATA_SUCCESS,ADD_CART_DATA_FAILURE,FETCH_CART_SUCCESS } from "./actionType";
import { DELETE_CART_DATA_REUEST,DELETE_CART_DATA_FAILURE} from "./actionType";
import {  USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionType";
const initialState ={
    isLoading:false,
    products:[],
    isError:false,
    cart:[],
    isAuth: false,
    token : ""
}

export const reducer = (state=initialState,{type,payload}) =>{

    switch(type){
        
        case GET_NOVELS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false,
            }
            case GET_NOVELS_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isError:false,
                products:payload
            }
            case GET_NOVELS_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError:true,
            }

            
        case ADD_CART_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
            case ADD_CART_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: [...state.cart,payload],
                isError: false
            }
            case ADD_CART_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
            case FETCH_CART_SUCCESS :
                return{
                    ...state,
                    cart:[...payload],
                }
            case DELETE_CART_DATA_REUEST :
                return{
                    ...state,
                    isLoading: true,
                    isError: false
                }
            case DELETE_CART_DATA_FAILURE :
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }

                case USER_LOGIN_REQUEST : {
                    return {
                        ...state,
                        isLoading:true,
                        isAuth:false,
                        isError:false 
                    }
                }
        
                case USER_LOGIN_SUCCESS : {
                    return {
                        ...state,
                        isLoading:false,
                        isAuth:true,
                        isError:false,
                        token: payload
                    }
                }
        
                case USER_LOGIN_FAILURE : {
                    return {
                        ...state,
                        isLoading:false,
                        isAuth:false,
                        isError:true 
                    }
                }
        
                case USER_LOGOUT_SUCCESS : {
                    return {
                        ...state,
                        isLoading:true,
                        isAuth:false,
                        isError:false 
                    }
                }
        default:
            return state
    }
}