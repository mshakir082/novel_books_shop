import Header from '../Components/Header'
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {useSelector ,useDispatch} from 'react-redux';
import {fetchCart,deleteProductCart} from '../Redux/action'
import { Box, Flex,Table,Th,Thead,Tr ,Tbody,Image,Text,Button,} from "@chakra-ui/react";
import axios from 'axios'
const CartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [qyt,setQyt] = useState(1)
  const cart_data = useSelector((state)=>state.cart)
  var bag =  0 ; 
for(var i=0; i<cart_data.length ; i++){
  if(cart_data[i].day==1){
    bag = bag + (cart_data[i].price*cart_data[i].day)
  }else{
    bag = bag + (5*cart_data[i].day)
  }
  
 }
 useEffect(()=>{
  if(cart_data.length==0){
          dispatch(fetchCart())
  }
  },[cart_data.length])

const deletehandler = (id)=>{
  dispatch(deleteProductCart(id))
}
const handleSelect = (id,qyt)=>{
  console.log(id,qyt)
  setQyt(qyt);
  var increase = {
      day : qyt ,
    }
    axios.patch(`http://localhost:8080/cart/${id}`,increase)
    .then((res)=>{
      console.log(res.data)
      dispatch(fetchCart())
    })
    .catch((e)=>{
      console.log(e)
    })
}
  return (
    <>
    <Box>
    <Header/>
    </Box>
    <Box
      height={"auto"}
      width={"100%"}
     >
      <Box
       color='#4A3C3C'
        textAlign={"start"}
        padding={"5px"}
        fontSize={"3xl"}
        fontWeight={"medium"}
        mb="15px"
      >
        Your Cart
      </Box>

      <Box mb='15px'>
      
      <Table >
          <Thead>
            <Tr>
              <Th fontSize='18px' >Image</Th>
              <Th fontSize='18px'>Title</Th>
              <Th fontSize='18px'>Price</Th>
              <Th fontSize='18px'>Days</Th>
              <Th fontSize='18px'>Delete</Th>
              <Th fontSize='18px'>Total</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* maTextthrough the fetched country list, to form table rows */}
            {
              cart_data.length > 0 && cart_data.map((el)=>(
                  <>
                      <Tr >
                      <Th  ><Image src={el.cover_photo} maxW='30%' /></Th>
                      <Th>{el.book_name}</Th>
                      <Th fontSize='18px'>₹{Math.ceil(el.price-(el.price*30)/100)}</Th>
                      <Th>
                         <Flex>
                         <Text cursor="pointer" fontSize='22px' onClick={()=>handleSelect(el.id,qyt-1)} >-</Text> <Text fontSize='22px' >{el.day}</Text>
                         <Text cursor="pointer"  fontSize='22px' onClick={()=>handleSelect(el.id,qyt+1)} >+</Text>
                         </Flex>

                       </Th>
                      <Th>
                        <Image src='https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-cross-icon-png-image_4232054.jpg' cursor= "pointer" w='20px' onClick={()=>deletehandler(el.id)}/>
                        </Th>
                        <Th><Text fontSize='18px'>{`₹ ${el.day>1 && el.day<=10 ?(5*el.day): el.day>10 && el.day<=20 ?((3*el.day)):el.day>20 && el.day<=30? ((2*el.day)): el.day>30 ? ((1*el.day)):Math.ceil(el.price-(el.price*30)/100)}`}</Text></Th>
                      </Tr>
                  </>
              ))
            }
          </Tbody>
          </Table>
        </Box>
        <Flex justifyContent='space-between' padding='5px'>
          <Text>Add a note to your order</Text>
          <Text>{`Subtotal  ₹${bag}`}</Text>
        </Flex>
        <Box textAlign='right'>Shipping, taxes, and discounts will be calculated at checkout.</Box>
        <Box textAlign='right' padding='0.5rem'>
        <Button bg='#363F43' color='white' mr='5px'>Continue Shopping</Button>
        <Button bg='#363F43' color='white' mr='5px' >Update Cart</Button>
        <Button bg='#363F43' color='white'>Checkout</Button>
        </Box>
   </Box>
    </>
  );
};

export default CartPage;