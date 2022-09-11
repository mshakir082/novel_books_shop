import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Box,Flex,Select,Image,Stack,Text} from '@chakra-ui/react'

const Header = () => {
const navigate=useNavigate();
  const handelChange =(e)=>{
    if(e.target.value==='Historical'){
      navigate('/historical')
      }else if(e.target.value==='Fantasy'){
      navigate('/fantacy')
      }else if(e.target.value==='Science'){
        navigate('/science')
        }else if(e.target.value==='Mystery'){
          navigate('/mystery')
          }else if(e.target.value==='Horror'){
            navigate('/horror')
            }
       
  }
  return (
    <Box >
      <Flex  width = '100%' height = '9rem' mt='3rem' justifyContent='space-between'>
          <Flex  width ='30%'padding='0.5rem' gap='5'>
            <Image src='./logo.png' width ={{md:'40%',base:"100%"}} />
            <Stack direction={'column'} border = '2px solid #400788' display={{md:'block',base:'none'}}></Stack>
            <Text fontSize='l' fontWeight='bold'padding='0.9rem' color='#400788' display={{md:'block',base:'none'}} >Royal Novel Rent Book Shop</Text>
          </Flex>
          <Box  width ='40%'>
            <Flex padding={{md:"2.3rem",base:'3rem'}} width={{base:'20rem',md:'100%'}} marginLeft={{base:'-6rem'}} gap='5'>
              <Box>
                <Select placeholder='Collections' border = 'none' width ={{md:'100%',base:'135%'}} fontWeight='450' fontSize='16px'>
                <option value='option1'>Coding Books </option>
                <option value='option2'>Engineering Books </option>
                <option value='option3'>Magazine</option>
                <option value='option3'>DSA Books</option>
                <option value='option3'>12th Books</option>
              </Select>
              </Box>
              <Box>
                <Select placeholder='Books' border = 'none' width ={{md:'75%',base:'100%'}}  fontWeight='450' fontSize='15px' onChange={handelChange} >
                <option value='Realistic'>Realistic novels</option>
               <option value='Historical' ><Link to='/historical'>Historical novels</Link></option>
                <option value='Science'>Science fiction novel</option>
                <option value='Autobiographical'>Autobiographical novels</option>
                <option value='Fantasy'>Fantasy novels</option>
                <option value='Horror'>Horror novels</option>
                <option value='Mystery'>Mystery novels</option>
                <option value='Detective'>Detective novels</option>
              </Select>
              </Box>
         </Flex>
          </Box>
      </Flex>
      <Box marginTop='15px' marginBottom='25px'>
       <hr ></hr>
      </Box>
      
    </Box>
  )
}

export default Header
