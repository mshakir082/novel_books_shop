import React from 'react'
import {Box,Flex,Text,Select} from '@chakra-ui/react'
const Browse = () => {
  return (
    <Box with={'100%'} height='auto' mt='18px' mb='18px'>
            <Flex justifyContent='space-between'>
                    <Box   width='15%' color='#695D5D'><Text fontSize='34px' fontWeight='450'>History</Text></Box>
                    <Box   width='55%'>
                           <Flex width='100%'>
                           <Box width={{base:'50%',md:'45%'}} p='0.5rem'  display='flex'>
                                <Text p='0.4rem ' w='150px' display={{base:"none",md:"block"}}  fontSize='15px'> Browse by</Text> 
                                <Select placeholder='History' border = '1px solid black'  width ='85%' fontWeight='450' fontSize='14px'  >
                                    <option value='All'>All</option>
                                    <option value='Architecture' >Architecture</option>
                                    <option value='Archive'>Archive</option>
                                    <option value='Art'>Art</option>
                                    <option value='Biography'>Biography</option>
                                    <option value='India'>India</option>
                                    <option value='Modern'>Modern style</option>
                                    <option value='History'>History</option>
                                 </Select>
                            </Box>

                            <Box width={{base:'50%',md:'55%'}} p='0.5rem'  display='flex'>
                                <Text p='0.4rem ' w='150px' display={{base:"none",md:"block"}} fontSize='15px'> Sort by</Text> 
                                <Select placeholder='Alphabetically,A-Z' border = '1px solid black'  width ='100%' fontWeight='450' fontSize='14px'  >
                                    <option value='Featured'>Featured</option>
                                    <option value='Best' >Best Selling</option>
                                    <option value='A-Z'>Alphabetically,A-Z</option>
                                    <option value='Z-A'>Alphabetically,Z-A</option>
                                    <option value='l2h'>Price,low to high</option>
                                    <option value='h2l'>Price,high to low</option>
                                    <option value='n2o'>Date,new to old</option>
                                    <option value='o2n'>Date,old to new</option>
                                 </Select>
                            </Box>
                            </Flex> 
                    </Box>
            </Flex>
    </Box>
  )
}

export default Browse