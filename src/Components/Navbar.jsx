import React,{useState,useEffect} from 'react'
import {Box,Flex,Icon,Text} from '@chakra-ui/react'
import {BsCart3} from 'react-icons/bs';
import styled from 'styled-components'
import {getProducts} from '../Redux/action'
import {useSelector,useDispatch} from 'react-redux'
import {useSearchParams,Link} from 'react-router-dom'
import  CartCounter from '../Components/CartCounter'
const Navbar = () => {
  const [searchParms,setSearchParams] = useSearchParams();
  const [q,setQ]=useState(searchParms.get('q') ||'');
  const [text,setText]=useState("")
  const dispatch=useDispatch();
  useEffect(()=>{
    if(q){
            setSearchParams({q:q},{replace: true})
            
            let params = {
              q:searchParms.get('q'),
            }
    dispatch(getProducts(params))
    }
    
},[setSearchParams,dispatch,q])

  return (
    <Box>
      <Box border='1px solid black' width='100%' height='3rem' bg='#1A202C' padding='0.5rem'>
            <Flex justifyContent={'space-between'} color='white'>
                    <Box width='40%' >Welcome to the Online Novel books Shop</Box>
                    <Box width='40%'>
                        <Flex justifyContent={'space-evenly'} gap='10' >
                           <Link to='/login'> <Box cursor="pointer" >Log in</Box></Link>
                            <Flex cursor="pointer" >
                            <Icon as={BsCart3} boxSize="1.1rem" mt="7px" />
                            <Text><CartCounter/> </Text>
                            <Text paddingTop={'0.4rem'} >Cart</Text>
                            </Flex>
                            <SearchBarWrapper>
                            <Image onClick={()=>setQ(text)} src="https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/search.png" alt=" Search logo" />
                                <Input  placeholder='Search'value={text} onChange={(e)=>setText(e.target.value)} />
                            </SearchBarWrapper>
                        </Flex>
                    </Box>
            </Flex>
      </Box>
    </Box>
  )
}

export default Navbar


const SearchBarWrapper=styled.div`

    border: 1px solid ;
    display: flex;
    height: 28px;
    width: 36%;
    margin: auto;
    background-color: white;
    border-radius: 5px;
    margin-left: -2%;
`
const Input =styled.input`

    border:none;
    outline:none;
    font-size:20px;
    flex:1;
    color: black;  
    width :70% ;
    padding-left: 1px;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
  

`
const Image=styled.img`

    height: 25px;
    padding: 3px 8px;

`