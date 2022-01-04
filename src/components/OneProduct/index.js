import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import {
  Box,
  Center,
  Image,
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

/////////////////////////////////////////////////////

const OneProduct = () => {
  const id = useParams().id;
  console.log(id);
  const [oneProduct, setOneProduct] = useState([]);
 useEffect(() => {
   productOne();
 }, []);

  const productOne = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/oneProduct/${id}`
    ); 
    setOneProduct(product.data);
  }
  return (
    <Center>
      <>
        {
          oneProduct.length &&
          oneProduct.map((item, index) => {
            console.log(item);
            return (
              <Center key={index}>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  bg="white"
                  rounded="xl"
                  shadow="lg"
                  borderWidth="1px"
                  m="0.5rem"
                  h="25rem"
                >
                  <Box
                    w="100%"
                    height="200px"
                    position="relative"
                    overflow="hidden"
                    roundedTop="lg"
                  >
                    <Image
                      src={item.image}
                      objectFit="cover"
                      alt="img of user"
                      layout="fill"
                      boxSize="200px"
                      ml="2rem"
                    />
                  </Box>
                  <Box p="6">
                    <Box
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      <Heading as="h4" size="md">
                        {item.name}
                      </Heading>
                    </Box>
                    <Box>
                      <Stat>
                        <StatLabel> {item.creator}</StatLabel>
                        <StatNumber> {item.price}</StatNumber>
                        <StatHelpText> size : {item.size}</StatHelpText>
                        <StatHelpText>{item.time}</StatHelpText>
                      </Stat>
                    </Box>
                    <Box>
                      <p>{item.description}</p>
                    </Box>
                    {/*
                    <Stat>
                          <StatLabel>Collected Fees</StatLabel>
                          <StatNumber>£0.00</StatNumber>
                          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                        </Stat>
                    
                    */}
                  </Box>
                </Flex>
              </Center>
            );
          })}
      </>
    </Center>
  );
}

export default OneProduct;
