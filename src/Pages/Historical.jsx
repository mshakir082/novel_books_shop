import React, { useState, useEffect } from "react";
import Browse from "../Components/Browse";
import { Box, Text, Flex } from "@chakra-ui/react";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/action";
import Header from "../Components/Header";
const Historical = () => {
  const products = useSelector((state) => state.products);
  console.log(products.items);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [page, setPage] = useState(1);
  let arr = new Array(4).fill(0);

  useEffect(() => {
    if (products.length === 0 || selected || page) {
      dispatch(getProducts(selected, page));
    }
  }, [products.length, selected, page]);

  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box height="60px">
        <Text
          fontSize="14px"
          textAlign="left"
          padding="1rem"
        >{`Home > History`}</Text>
      </Box>
      <Box>
        <Browse />
      </Box>
      <Box mt="15px" textAlign="left" padding="0.2rem 1rem">
        <Text>
          A range of books covering the history of people, collections and
          buildings.
        </Text>
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {products?.map((el) => {
          return (
            <ProductList
              key={el.id}
              image={el.image}
              title={el.title}
              price={el.price}
              discription={el.discription}
              rating={el.rating.rate}
              count={el.rating.count}
              id={el.id}
              el={el}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Historical;
