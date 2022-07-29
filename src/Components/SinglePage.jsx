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
// import {useState} from "react"
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
let count = 0;
const SinglePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    <div style={{width:'75%',height:'auto',margin:'auto'}}>
      <Box className={styles.singlepageparent} marginTop={"50px"}>
        <Box justifyContent={"center"}>
          <Image
            src="https://testcub1.s3.amazonaws.com/media/images/books/A_Whisper_Of_Life_Harvey_Family_Sagas2022-06-16-11-20-45.jpg"
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
              A Whisper Of Life Harvey Family Sagas
            </Text>
            <Text color={"gray"} fontWeight="bold">
              --Gloria Cook
            </Text>
          </Box>
          {/* icon and head */}
          <Box justifyContent={"right"}>
            <Text display={"flex"}>
              Release Year: <Text fontWeight="bold">1999</Text>
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
              RS:150
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
            >
              Add To Cart
            </Button>
            <Flex gap="10px">
              <Button
                border={"2px solid grey"}
                backgroundColor="Red"
                color="white"
                borderRadius={"5px"}
                size="md"
                height="48px"
                width="200px"
                borderColor="blue.500"
              >
                Rent
              </Button>
            </Flex>
          </Flex>
          <br />

          {/* function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <> */}
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
          About A Whisper Of Life Harvey Family Sagas
        </Text>
      </Box>

      <Box marginBottom={"50px"}>
        <Text>
          The new book in the popular Harvey series - It is 1948, and the
          village of Hennaford is struggling to recover from the war. Johnny
          Harvey is disillusioned; injured in the war and disturbed at the
          changing society; life seems to be passing him by. Meanwhile,
          sixteen-year-old Tess Viant, crippled with polio and abandoned by her
          family, is befriended by Jill Harvey. Jill is delighted to be pregnant
          after four years of marriage to Tom, but when complications arise,
          it's Tess who has to help Jill . . .
        </Text>
      </Box>
    </div>
  );
};

export default SinglePage;
