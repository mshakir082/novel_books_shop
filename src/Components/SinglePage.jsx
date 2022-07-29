import { Box, Button, Flex, Icon, Image,  Text } from '@chakra-ui/react';
import {Progress} from "@chakra-ui/progress"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import styles from './Ssingle.module.css';


import {BiHeart} from 'react-icons/bi'
import { BsFacebook, BsTwitter } from 'react-icons/bs';


import React from 'react'
// import {useState} from "react"
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
let count=0
const SinglePage = () => {

// const CurrentData=useSelector(state=>state.Appreducer.products)
// console.log(CurrentData)
//     const[data,setData]=useState({})
    
//     let {id}=useParams()
//      console.log(id)
//     useEffect(()=>{

//       if(id){
//         const data =CurrentData?.find((el)=>el.id===Number(id));
//         data && setData(data)
//       }
//   },[id,CurrentData])
  
    
    
//         console.log(data)
  return (
    <Box className={styles.singlepageparent} marginTop={"50px"}>
    <Box justifyContent={"center"}  className={styles.carousel} border={"2px solid black"} >
    <Carousel  width={"100%"}  dynamicHeight={false} className={styles.carouselSetting? "showIndicators":""}  showIndicators={false} showStatus={false} showArrows={false} >
       <div style={{width:"100%",height:"600px"}}  >
        <img  width={"100%"} className='imagec'  src="" alt="" />
       </div>
       <div style={{width:"100%",height:"600px",justifyContent:"center"}}  >
        <img  width={"100%"} src="" alt="" />
       </div>
       <div style={{width:"100%",height:"600px",justifyContent:"center"}}>
        <img  width={"100%"} src="" alt="" />
       </div>
       <div style={{width:"100%",height:"600px",justifyContent:"center"}}>
       <img  width={"100%"} src="" alt="" />       </div>
       <div style={{width:"100%",height:"600px",justifyContent:"center"}}>
       <img   src="" alt="" />       </div>
    </Carousel>
    </Box>
    <Box>
      <br />
        <Box><Text color={"#088366"}>INDEMAND</Text></Box>
        {/* heading */}
           <Box marginBottom={"50px"}> <Text fontSize={"35px"} fontWeight="bold" >
           A Whisper Of Life Harvey Family Sagas
            </Text>
            <Text color={"gray"} fontWeight="bold">--Gloria Cook</Text>
            </Box>
           {/* description */}
          
           
        <Box marginBottom={"50px"}><Text>The new book in the popular Harvey series - It is 1948, and the village of Hennaford is struggling to recover from the war. Johnny Harvey is disillusioned; injured in the war and disturbed at the changing society; life seems to be passing him by. Meanwhile, sixteen-year-old Tess Viant, crippled with polio and abandoned by her family, is befriended by Jill Harvey. Jill is delighted to be pregnant after four years of marriage to Tom, but when complications arise, it's Tess who has to help Jill . . .</Text></Box>
        {/* icon and head */}
      <Box>
      <Text></Text>
      <Text></Text>
      </Box>
      {/* price */}
      <Box marginBottom={"50px"} display={"flex"} justifyContent={'space-between'}>
        <Text textDecoration={"HighlightText"} fontSize={"2xl"}>RS:150</Text>
        <Text>Rent Price:Rs10/day</Text>

      </Box>
      <Box>
        <Progress value={80} borderRadius={"5px"}
                  colorScheme="green" height={"8px"}/>
      </Box>
    <br/><br/>

      <Flex justifyContent={"space-between"}>
        <Button border={"1px solid grey"}
    
         backgroundColor="Black"
         color="white"
         borderRadius={"5px"} >Buy</Button>
         <Flex  gap="10px">
            {/* <BsFacebook size={"20px"}/>
             <BsTwitter size={"20px"}/>
             <Image src="https://testcub1.s3.amazonaws.com/media/images/books/A_Whisper_Of_Life_Harvey_Family_Sagas2022-06-16-11-20-45.jpg" width={"20px"} height="20px"/>
                */}
                <Button border={"1px solid grey"}
    
    backgroundColor="Red"
    color="white"
    borderRadius={"5px"} >Rent</Button>
         </Flex>
      </Flex>
    </Box>
   </Box>
  )
}

export default SinglePage



  