import React,{useState,useEffect} from 'react'
import Browse from '../Components/Browse'
import {Box,Text,Flex} from '@chakra-ui/react'
import ProductList from './ProductList'
import {useSelector,useDispatch} from 'react-redux'
import {getScience} from '../Redux/action'
import Header from '../Components/Header'
import {useSearchParams,useLocation} from 'react-router-dom'
const ScienceFiction = () => {
  const products=useSelector((state) =>state.products);
  const [searchParams]=useSearchParams();
  const location=useLocation();
  const dispatch = useDispatch();
  const [selected,setSelected]=useState('')
  
   

   useEffect(()=>{
       
    if(products.length ===0 || location.search || location.search.length === 0 ){
      const sortBy = searchParams.get('sortBy');
      
        const getBookParams ={
      params:{
          category:searchParams.getAll('category'), 
          _sort: sortBy && "price",
          _order:sortBy,
          q:searchParams.get('q')
         
      }
    }
    dispatch(getScience(getBookParams))
  }
             
       
   },[location.search])

return (
  <div style={{width:'75%',height:'auto',margin:'auto'}} >
  <Box>
      <Box>
          <Header/>
      </Box>
      <Box  height='60px'>
          <Text fontSize='14px' textAlign='left' padding='1rem'>{`Home > Science-Fiction`}</Text>
      </Box>
      <Box>
      <Browse />
      </Box>
      <Box mt='15px' textAlign='left' padding='0.2rem 1rem'>
          <Text>A range of books covering the history of people, collections and buildings.</Text>
      </Box>
      <Flex flexWrap='wrap' justifyContent='space-around'>
              {
            products?.map((el)=>{
                 return <ProductList  key={el.id} image={el.cover_photo} title={el.book_name} price={el.price} discription={el.Description}  el={el} />
            })
          }
              </Flex>
  </Box>
  </div>
)
}
export default ScienceFiction
