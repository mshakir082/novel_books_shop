import React,{useEffect} from 'react'
import {Box} from '@chakra-ui/react'
import { useSelector,useDispatch } from 'react-redux';
import {fetchCart} from '../Redux/action'

const CartCounter = () => {
    const cart=useSelector(state=>state.cart)
 
    const dispatch=useDispatch();

    useEffect(()=>{
        if(cart?.length===0){
            dispatch(fetchCart())
        }
    },[cart?.length,dispatch])
  return (
    <Box backgroundColor="black" textColor="white"  borderRadius="50%" height="20px" width="20px" textAlign="center" marginTop="-20%" marginLeft="-20%">
        {cart?.length ? cart.length:0}
    </Box>
  )
}

export default CartCounter
