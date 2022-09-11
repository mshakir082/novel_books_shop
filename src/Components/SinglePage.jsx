import { Progress } from "@chakra-ui/progress";
import {
  Box,
  Button, 
  Flex,
  Image, 
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Ssingle.module.css";
import React from "react";
import {useState,useEffect} from "react"
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {addProductCart} from '../Redux/action'
const SinglePage = () => {
    const dispatch=useDispatch();
    const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const CurrentData=useSelector(state=>state.products)
  
      const[data,setData]=useState({})

      let {id}=useParams()
       console.log(id)
      useEffect(()=>{

        if(id){
          const data =CurrentData?.find((el)=>el.id===Number(id));
          data && setData(data)
        }
    },[id,CurrentData])

    const handelClick =()=>{
       data && dispatch(addProductCart(data))
        navigate('/cart')
    }
  return (
    <>
    <div style={{width:'75%',height:'auto',margin:'auto'}} >
      <Box className={styles.singlepageparent} marginTop={"50px"}>
        <Box justifyContent={"center"}>
          <Image
            src={data.cover_photo}
            width={"100%"}
            height="500px"
          />
        </Box>
        <Box></Box>
        <Box>
          <br />
          <br />
          <Box>
            <Text color={"#088366"}>INDEMAND</Text>
          </Box>
          {/* heading */}
          <Box marginBottom={"50px"}>
            {" "}
            <Text fontSize={"35px"} fontWeight="bold">
              {data.book_name}
            </Text>
            <Text color={"gray"} fontWeight="bold">
              {data.author}
            </Text>
          </Box>
          {/* icon and head */}
          <Box justifyContent={"right"}>
            <Text display={"flex"}>
              Release Year: <Text fontWeight="bold">{data.release_year}</Text>
            </Text>
          </Box>
          <br />
          {/* price */}
          <Box
            marginBottom={"10px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Text textDecoration={"HighlightText"} fontSize={"2xl"}>
              RS:{data.price}
            </Text>
          </Box>

          <br />
          <br />

          <Flex justifyContent={"space-between"}>
            <Button
              border={"2px solid grey"}
              backgroundColor="Black"
              color="white"
              borderRadius={"5px"}
              size="md"
              height="48px"
              width="200px"
              borderColor="white.500"
              onClick={handelClick}
            >
              Add To Cart
            </Button>
            
          </Flex>
          <br />
          <Button onClick={onOpen} colorScheme='skyblue' variant='link'>Terms And Condition</Button>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Terms And Condition</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  You can scroll the content behind the modal
                </Text>
               decr
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* </>
  )
} */}

          <br />
<br/>
          <Box>
            <Progress
              value={80}
              borderRadius={"5px"}
              colorScheme="green"
              height={"8px"}
            />
          </Box>
        </Box>
      </Box>
      <br />

      <br />
      {/* description */}

      <Box marginBottom={"50px"}>
        {" "}
        <Text fontSize={"25px"} fontWeight="bold" color="orange">
          About  {data.book_name}
        </Text>
      </Box>

      <Box marginBottom={"50px"}>
        <Text>
        {data.Description}
        </Text>
      </Box>
      </div>
    </>
  );
};

export default SinglePage;