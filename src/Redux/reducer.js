import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType'

const initialState ={
    isLoading:false,
    products:[],
    isError:false,
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
        default:
            return state
    }
}