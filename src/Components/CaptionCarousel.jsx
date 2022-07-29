import React from 'react'
import { Box } from '@chakra-ui/react';


import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import styles from './Ssingle.module.css';


function CaptionCarousel() {
  return (
    <div>
      <Box justifyContent={"center"}  className={styles.carousel} >
    <Carousel  width={"100%"}  dynamicHeight={false} className={styles.carouselSetting? "showIndicators":""}  showIndicators={false} showStatus={false} showArrows={false} >
       <div style={{width:"100%",height:"300px"}}  >
        <img  width={"100%"} className='imagec'  src="https://imgs.search.brave.com/eebo5GTa2nnAZc3lrR_sbPEfHn8O85dwkRMD6Amzopc/rs:fit:802:160:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vdC9ib29r/cy1vbGQtdmludGFn/ZS1hbnRpcXVlLXJv/dy1zaGVsZi13b3Ju/LWRpZmZlcmVudC1p/c29sYXRlZC1jbGlw/LXBhdGgtcXVpY2st/aW5zZXJ0aW9uLTU1/ODIyNjY0LmpwZw" alt="" />
       </div>
       <div style={{width:"100%",height:"300px",justifyContent:"center"}}  >
        <img  width={"100%"} src="https://imgs.search.brave.com/BjpmAetmv2m3gdGRHU8vRyMkqhvmxYPLibhvZKLzzug/rs:fit:1200:744:1/g:ce/aHR0cHM6Ly8xNDkz/NTUwNzgudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8xMi8wMjA3NDYy/NC9Ub3AtMTAwLUJl/c3QtU2VsbGluZy1C/aW9ncmFwaHktQm9v/a3Mtb2YtQWxsLVRp/bWUuanBn" alt="" />
       </div>
       <div style={{width:"100%",height:"300px",justifyContent:"center"}}>
        <img  width={"100%"} src="https://imgs.search.brave.com/_3juC0gEwB0UTMrJLkW7gRrtDqd7M3p6AZVTx4fF2Mo/rs:fit:1200:1200:1/g:ce/aHR0cDovL3NjcmVl/bmludmFzaW9uLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/My8wOC9jb2xsYWdl/LW9mLWVsbW9yZS1s/ZW9uYXJkLWJvb2tz/LmpwZw" alt="" />
       </div>
       <div style={{width:"100%",height:"300px",justifyContent:"center"}}>
       <img  width={"100%"} src="https://imgs.search.brave.com/yj_QSQeFABHiAyaM3ODLupagHx59NE1qdjuuH97PA2I/rs:fit:599:200:1/g:ce/aHR0cDovL2xoNC5n/Z3BodC5jb20vX2Va/WmNYa3gzNGJNL1Nn/b2F0NjZxY3pJL0FB/QUFBQUFBQU1jL1lB/bzdYdFowMFVVL0JP/T0tTJTIwY29sbGFn/ZV90aHVtYiU1QjIl/NUQuanBnP2ltZ21h/eD04MDA" alt="" />       </div>
       <div style={{width:"100%",height:"300px",justifyContent:"center"}}>
       <img   src="https://imgs.search.brave.com/JUpLxc3HdiV8F1VY3q79stRg9XxXztWrpM7gd8ZCLMQ/rs:fit:1024:681:1/g:ce/aHR0cHM6Ly9zMjk4/Mi5wY2RuLmNvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE1LzAx/L2Jvb2stc2VyaWVz/LTEwMjR4NjgxLmpw/Zy5vcHRpbWFsLmpw/Zw" alt="" />       </div>
    </Carousel>
    </Box>
      
    </div>
  )
}

export default CaptionCarousel
