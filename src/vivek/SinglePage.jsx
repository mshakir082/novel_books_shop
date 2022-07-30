import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./Ssingle.module.css";

import { BiHeart } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";

import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
let count = 0;
const SinglePage = () => {
  const CurrentData = useSelector((state) => state.Appreducer.products);
  console.log(CurrentData);
  const [data, setData] = useState({});

  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    if (id) {
      const data = CurrentData?.find((el) => el.id === Number(id));
      data && setData(data);
    }
  }, [id, CurrentData]);

  console.log(data);
  return (
    <Box className={styles.singlepageparent} marginTop={"50px"}>
      <Box justifyContent={"center"} className={styles.carousel}>
        <Carousel
          width={"100%"}
          dynamicHeight={false}
          className={styles.carouselSetting ? "showIndicators" : ""}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
        >
          <div style={{ width: "100%", height: "600px" }}>
            <img width={"100%"} className="imagec" src={data.image} alt="" />
          </div>
          <div
            style={{ width: "100%", height: "600px", justifyContent: "center" }}
          >
            <img width={"100%"} src={data.image2} alt="" />
          </div>
          <div
            style={{ width: "100%", height: "600px", justifyContent: "center" }}
          >
            <img width={"100%"} src={data.image3} alt="" />
          </div>
          <div
            style={{ width: "100%", height: "600px", justifyContent: "center" }}
          >
            <img width={"100%"} src={data.image4} alt="" />{" "}
          </div>
          <div
            style={{ width: "100%", height: "600px", justifyContent: "center" }}
          >
            <img src={data.image5} alt="" />{" "}
          </div>
        </Carousel>
      </Box>
      <Box>
        <br />
        <Box>
          <Text color={"#088366"}>INDEMAND</Text>
        </Box>
        {/* heading */}
        <Box marginBottom={"50px"}>
          {" "}
          <Text fontSize={"35px"} fontWeight="bold">
            {data.heading}
          </Text>
        </Box>
        {/* description */}

        <Box marginBottom={"50px"}>
          <Text>{data.description}</Text>
        </Box>
        {/* icon and head */}
        <Box>
          <Text></Text>
          <Text></Text>
        </Box>
        {/* price */}
        <Box
          marginBottom={"50px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text textDecoration={"HighlightText"} fontSize={"2xl"}>
            ${data.price}
          </Text>
          <Text>{data.percent}%</Text>
        </Box>
        <Box>
          <Progress
            value={data.percent}
            borderRadius={"5px"}
            colorScheme="green"
            height={"8px"}
          />
        </Box>
        <br />
        <br />

        <Flex justifyContent={"space-between"}>
          <Button
            border={"1px solid grey"}
            backgroundColor="white"
            borderRadius={"none"}
            leftIcon={
              <BiHeart
                size={"25px"}
                className={Heart === true ? `${styles.heart}` : ``}
              />
            }
          >
            FOLLOW
          </Button>
          <Flex gap="10px">
            <BsFacebook size={"20px"} />
            <BsTwitter size={"20px"} />
            <Image
              src="https://th.bing.com/th/id/OIP.ASjs8TW-8mI6rryXhKY0RwAAAA?pid=ImgDet&rs=1"
              width={"20px"}
              height="20px"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default SinglePage;
