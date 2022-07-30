import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaAngleRight } from "react-icons/fa";
import { VscTriangleUp } from "react-icons/vsc";
import { AiOutlineCreditCard } from "react-icons/ai";
import { useState } from "react";
import styles from "./Payment.module.css";
import { loadData, saveData } from "../../Utils/localstorage";
import { useNavigate } from "react-router-dom";

const schedule = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let localday = saveData("bookDay", "");
let localtime = saveData("time", "");
let localdate = saveData("bookDate");
const date = new Date();
const month = date.getMonth();
const currentDay = date.getDay();
let curMonth = "";
months.map((el, i) => {
  if (i === month) curMonth = el;
});

const Model1 = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modelOpen, setModelOpen] = useState(false);
  const toast = useToast();
  const [trig, setTrig] = useState(-1);
  const [t, setT] = useState(-1);
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const addAddress = () => {
    const obj = {
      address,
    };
    saveData("address", obj);
    setOpen(false);
  };
  
  const currAddress=loadData("address") || null
  const modelClose = () => {
    setModelOpen(false);
    navigate("/");
  };
  const modelOp = () => {
    setModelOpen(true);
  };

  const payData = () => {
    localday = loadData("bookDay");
    localdate = loadData("bookDate");
    localtime = loadData("time");
      onClose();
      modelOp();
    
  };
  return (
    <>
      <Button
      w='100%'
      colorScheme={'purple'}
      mt='5%'
        onClick={() => {
          setTrig(-1);
          setT(-1);
          saveData("bookDate", "");
          saveData("time", "");
          saveData("address","")
          onOpen();
        }}
      >
        Add Your Address
      </Button>

      <Modal onClose={onClose} size={"3xl"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currAddress ? (
              <>
                <Flex
                  justifyContent={"space-between"}
                  alignItems="center"
                  w="90%"
                >
                  <Flex>
                    <FaHome color="purple" />
                    <Text mt="10%" fontSize={"lg"}>
                      {currAddress.address}
                    </Text>
                  </Flex>
                  <Button
                    onClick={() => setOpen(true)}
                    fontWeight={"extrabold"}
                    fontSize={"bolder"}
                    size={"sm"}
                    mt="2%"
                    colorScheme={"green"}
                  >
                    +
                  </Button>
                </Flex>
              </>
            ) : (
              <Button
                colorScheme={"purple"}
                mt="1%"
                onClick={() => setOpen(true)}
              >
                Add Adress
              </Button>
            )}
            {open ? (
              <>
                <Textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Textarea>
                <Button colorScheme={"purple"} mt="1%" onClick={addAddress}>
                  Add
                </Button>
              </>
            ) : null}
            <Divider mt="1%" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
            
            <VscTriangleUp />
          
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => payData()} w="100%" colorScheme={"purple"}>
              Make Payment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Payment done model */}

      <Modal onClose={modelClose} isOpen={modelOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontWeight={"700"}
            color="purple.500"
            textAlign={"center"}
          >
            Payment Successfull
          </ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody color="purple.500">
            <Heading as="h5" size="15px" mb="2%">
              Your Booking Details
            </Heading>
            <Text fontWeight={"500"}>
              Shreenath Panchal
            </Text>
           
            <Text fontWeight={"500"}>
              Date of Booking : 30/07/2022
            </Text>
            <Text fontWeight={"500"}>Day : Saturday</Text>
            
            <Text fontWeight={"500"}>Phone : 8766992607</Text>
            <Text fontWeight={"500"}>Address : {currAddress?.address}</Text>
            <br />
            <Image src="https://giphy.com/gifs/abcnetwork-a-million-little-things-abc-amillionlittlethingsabc-thingsabc-NbcHn8cuo8SkaCfoM8" />
          </ModalBody>
          <ModalFooter>
            <Button onClick={modelClose} colorScheme="purple">
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Model1;
{/* <iframe src="https://giphy.com/embed/NbcHn8cuo8SkaCfoM8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/abcnetwork-a-million-little-things-abc-amillionlittlethingsabc-thingsabc-NbcHn8cuo8SkaCfoM8" */}