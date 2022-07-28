import {GET_NOVELS_REQUEST,GET_NOVELS_SUCCESS,GET_NOVELS_FAILURE} from './actionType'
import axios from 'axios'
export const getProducts = (selected,page) => dispatch =>{

    dispatch({type: GET_NOVELS_REQUEST})
    return axios({
    method: 'get',
    url:"http://localhost:8080/hair",
    
    params:{
      _page:page,
      _limit:8,
      // _sort:"price",
      // _order:selected,
  }
  })
    .then((r)=>{
        dispatch({type:GET_NOVELS_SUCCESS,payload:r.data});
        return GET_NOVELS_SUCCESS
    })
    .catch((err) =>dispatch({type:GET_NOVELS_FAILURE,payload:err}))
  }
  