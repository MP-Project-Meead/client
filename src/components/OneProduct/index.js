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

/////////////////////////////////////////////////////

const OneProduct = () => {
  const id = useParams().id;
  const param = useParams();
  const [oneProduct, setOneProduct] = useState(null);
  const [comments, setComments] = useState([]);

  const [msg, setMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState();

  /////////////////////////////////////////////////////

  const state = useSelector((state) => {
    return {
      signIn: state.signIn,
    };
  });

  /////////////////////////////////////////////////////

  // console.log(id);
  useEffect(() => {
    productOne();
    productComments();
  }, []);

  /////////////////////////////////////////////////////

  const productOne = async () => {
    try {
      const product = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/oneProduct/${id}`
      );
      // console.log(product.data);
      setOneProduct(product.data);
    } catch (error) {
      console.log("productOne", error);
    }
  };

  const productComments = async () => {
    try {
      const comments = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/comment/getAllComments/${id}`
      );
      setComments(comments.data);
    } catch (error) {
      console.log("productOne", error);
    }
  };

  /////////////////////////////////////////////////////////////

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
// console.log(state);
  return (
    <Center>
      <>
        {oneProduct && (
          <>
            <Center>
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
                    src={oneProduct.image}
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

                  <button
                    className="bttn"
                    onClick={() => addToCart(oneProduct._id)}
                  >
                    {/* <BsCartPlusFill /> */}
                    اضف للسله
                  </button>
                </Box>
              </Flex>
            </Center>
            {/* {comments.length &&
              comments.map((item) => (
                <div key={item._id}>
                  <p>{item.byUser.username}</p>
                  <p>{item.description}</p>
                  
                </div>
              ))} */}
          </>
        )}
      </>
    </Center>
  );
};

export default OneProduct;

// const giveLike = () => {
//   axios
//     .post(
//       `${process.env.REACT_APP_BASE_URL}/addLike`,
//       {
//         postId: param.id,
//       },
//       { headers: { Authorization: `Bearer ${state.Login.token}` } }
//     )
//     .then((response) => {
//       console.log(response.data);
//       getPostes();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
