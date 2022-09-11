import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Model1 from "../Components/bookslots/Model1";

const Checkout = () => {
  const [load, setLoad] = useState(false);

useEffect(() => {
   const timer = setTimeout(() => {
     setLoad(true);
   }, 3000);

   return () => {
     clearTimeout(timer);
   };
 }, []);
  return (
    
    <div style={{width:'30%',height:'auto',margin:'auto'}}>
    <Box >
      {load ? (
        <>
          <Box h='300px' w='300px' m='auto'>
            <Image src="https://media4.giphy.com/media/PijzuUzUhm7hcWinGn/giphy_s.gif" alt='auth-img'/>
          </Box>

          <Model1 />
        </>
      ) : (
        <>
          <Heading>Checking User...</Heading>
        </>
      )}
    </Box>
    </div>
  );
};

export default Checkout;