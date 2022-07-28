import React from "react";
import { Box, Flex, MenuGroup } from "@chakra-ui/react";
import { Divider } from '@chakra-ui/react'
const CartPage = () => {
  return (
    <Box
      height={"90vh"}
      width={"100%"}
      border={"2px solid black"}
      padding={"5px"}
    >
      <Box
        height={"8vh"}
        width={"100%"}
        border={"2px solid black"}
        textAlign={"start"}
        padding={"5px"}
        fontSize={"3xl"}
        fontWeight={"medium"}
        backgroundColor={"gray"}
        color={"white"}
      >
        Your Cart
      </Box>
      <Box padding={"5px"} marginLeft={"63%"}>
        <Flex
          flexDirection={"row"}
          height={"4vh"}
          width={"100%"}
          padding={"5px"}
          justifyContent={"space-around"}
          textAlign={"center"}
          fontWeight={"medium"}
          fontSize={"2xl"}
        >
          <Box>Price</Box>
          <Box>Quantity</Box>
          <Box>Total</Box>
        </Flex>
      </Box>
     
      <br />
      <br />
      <Box padding={"5px"}>
        <Flex
          flexDirection={"row"}
          height={"50vh"}
          width={"100%"}
        //   border={"2px solid red"}
          padding={"5px"}
          gap={"60px"}
          textAlign={"center"}
          justifyContent={"space-around"}
        >
          <Box width={"25%"} border={"2px solid black"}>
            <img style={{"height":"48vh", "width":"100%"}} src="https://www.topconsumerreviews.com/best-book-clubs/images/body-book-clubs-8.jpg" alt="" />
          </Box>
          <Box width={"30%"} border={"2px solid black"} height={"15vh"}>
          FPJ Anniversary 2022: What is the future of publishing?
13 July 2022, 07:02 AM
          </Box>
          <br />
          <Box fontWeight={"bold"}>$150</Box>
          <br />
          <Box fontWeight={"bold"}>4 + -</Box>
          <br />
          <Box fontWeight={"bold"}>$600</Box>
          <br />
        </Flex>
      </Box>
      <br />
      <Box
        height={"4vh"}
        width={"100%"}
        // border={"2px solid red"}
        textAlign={"start"}
        padding={"5px"}
        fontWeight={"bold"}
        marginLeft={"90%"}
      >
        SubTotal:$600
      </Box>

      <Box padding={"5px"} marginLeft={"60%"}>
        <Flex
          flexDirection={"row"}
          height={"4vh"}
          width={"100%"}
        //   border={"2px solid red"}
          padding={"5px"}
          gap={"60px"}
          justifyContent={"space-around"}
        >
          <Box>Continue Shopping</Box>
          <Box>Update Cart</Box>
          <Box>Checkout</Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CartPage;
