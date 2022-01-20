import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
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
import { AiOutlineShoppingCart } from "react-icons/ai";



const OneProduct = () => {
  const id = useParams().id;
  const [oneProduct, setOneProduct] = useState(null);

  const [msg, setMsg] = useState("");
  const [cart, setCart] = useState();

  

  const state = useSelector((state) => {
    return {
      signIn: state.signIn,
    };
  });

  

  useEffect(() => {
    productOne();
  }, []);

  

  const productOne = async () => {
    try {
      const product = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/oneProduct/${id}`
      );
      setOneProduct(product.data);
    } catch (error) {
      console.log("productOne", error);
    }
  };

  
  const addToCart = async (id) => {
    console.log(id);
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/addToCart`,
        { _id: id },

        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );

      setCart(result.data);
      {
        result.status == 200
          ? setMsg("Added to Cart")
          : setMsg("didn't Added to Cart");
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Center>
      <>
        {oneProduct && (
          <>
            <Center className="flex">
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
                    src={oneProduct.image[1]}
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
                      {oneProduct.name}
                      {oneProduct.likeBy.length}
                    </Heading>
                  </Box>
                  <Box>
                    <Stat>
                      <StatLabel> {oneProduct.creator}</StatLabel>
                      <StatNumber> {oneProduct.price}</StatNumber>
                      <StatHelpText> size : {oneProduct.size}</StatHelpText>
                      <StatHelpText>{oneProduct.time}</StatHelpText>
                    </Stat>
                  </Box>
                  <Box>
                    <p>{oneProduct.description}</p>
                  </Box>
                  {state.signIn.role === "61c42c3139940ec8e18224d0" && (
                    <button
                      className="deleteBtn"
                      onClick={() => addToCart(oneProduct._id)}
                    >
                      <AiOutlineShoppingCart className="carticon"/>
                    </button>
                  )}
                </Box>
              </Flex>
            </Center>
          </>
        )}
      </>
    </Center>
  );
};

export default OneProduct;

