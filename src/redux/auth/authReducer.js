import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS } from "./actionTypes"


export const initState = {
    isLoading : false,
    isError: false,
    isAuth: false,
    token : ""
}

export const authReducer = (state=initState,action) =>{
    switch(action.type) {
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
                token: action.payload
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

        default :
         return state
    }
}