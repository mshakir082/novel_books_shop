import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Box,Flex,Select,Image,Stack,Text} from '@chakra-ui/react'
const Header = () => {


  const navigate=useNavigate();
  const handelChange =(e)=>{
    if(e.target.value==='Historical'){
      navigate('/historical')
    }
  }
  return (
    <Box >
      <Flex  width = '100%' height = '9rem' mt='3rem' justifyContent='space-between'>
          <Flex  width ='30%'padding='0.5rem' gap='5'>
            <Image src='./logo.png' width ='40%' />
            <Stack direction={'column'} border = '2px solid #400788' ></Stack>
            <Text fontSize='xl' fontWeight='bold'padding='0.2rem' color='#400788' >Royal Novel Rent Book Shop</Text>
          </Flex>
          <Box  width ='40%'>
            <Flex padding='2.5rem'>
              <Box>
                <Select placeholder='Collections' border = 'none' width ='100%' fontWeight='450' fontSize='16px'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Autobiographical novels</option>
                <option value='option3'>Option 3</option>
              </Select>
              </Box>
              <Box>
                <Select placeholder='Books' border = 'none' width ='75%' fontWeight='450' fontSize='15px' onChange={handelChange} >
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
