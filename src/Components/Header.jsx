import React from 'react'
import {Box,Flex,Select,Image,Stack,Text} from '@chakra-ui/react'
const Header = () => {
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
                <Select placeholder='Books' border = 'none' width ='75%' fontWeight='450' fontSize='15px' >
                <option value='option1'>Realistic novels</option>
                <option value='option2'>Historical novels</option>
                <option value='option3'>Science fiction novel</option>
                <option value='option1'>Autobiographical novels</option>
                <option value='option2'>Fantasy novels</option>
                <option value='option3'>Horror novels</option>
                <option value='option2'>Mystery novels</option>
                <option value='option3'>Detective novels</option>
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
