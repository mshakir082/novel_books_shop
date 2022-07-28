import { Box, Text,Flex ,Image} from '@chakra-ui/react'
import React from 'react'

const Months = () => {
  return (
    <Box mt='30px' width='100%' height='auto' padding='0.2rem'>
      <Text fontSize='28px' color='#403131' textAlign='left' fontWeight={'500'}  mb='12px'>Book of the Month</Text>
      <Flex justifyContent='space-around' direction='row' cursor='pointer'>

        <Box width='20%'>
         <Image height='160px'  width='100%' src='https://cdn.shopify.com/s/files/1/0784/8619/products/Chile_large.jpg?v=1655477159' />
        <Text>Plants from woods & Forests of chile</Text>
        <Text>₹ 280.00</Text>
        </Box>
        <Box width='20%' >
         <Image height='160px'  width='100%' src='https://5.imimg.com/data5/XJ/SN/MY-46815014/data-structures-and-algorithms-made-easy-500x500.png' />
         <Text >DSA Books Collections</Text>
         <Text>₹ 1480.00</Text>
        </Box>
        <Box width='20%'>
         <Image height='160px'  width='100%' src='https://cdn.shopify.com/s/files/1/0784/8619/products/worldofplantsbook_large.jpg?v=1655205365' />
         <Text>Engineering Books Collections</Text>
         <Text>₹ 880.00</Text>
        </Box>
        <Box width='20%'>
         <Image height='160px'  width='100%' src='https://3.imimg.com/data3/IU/EB/MY-10841785/imgbooksmags-500x500.jpg' />
       <Text>World of Plants: Stories of Survival</Text>
       <Text>₹ 1280.00</Text>
        </Box>
       
        
      </Flex>
    </Box>
  )
}

export default Months
