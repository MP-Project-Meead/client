import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import { IoCartSharp, IoCartOutline } from "react-icons/io5";

////////////////////

const OneProduct = () => {
  const id = useParams().id;
  const [oneProduct, setOneProduct] = useState(null);
  // eslint-disable-next-line
  const [checkCart, setCheckCart] = useState(0);

  const state = useSelector((state) => {
    return {
      signIn: state.signIn,
    };
  });
  console.log(state);

  ////////////////////

  useEffect(() => {
    productOne();
    if (state.signIn.role === "61c42c3139940ec8e18224d0") {
      toggel();
    }
    // eslint-disable-next-line
  }, []);

  ////////////////////

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

  ////////////////////

  const addToCart = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/addToCart`,
        { _id: id },
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    ///////////////
    toggel();
  };
  const toggel = async () => {
    console.log(id);
    try {
      const product = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/checkCart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      // productOne();
      console.log(product);
      setCheckCart(product.status);
    } catch (error) {
      console.log("productOne", error);
    }
  };

  ////////////////////

  return (
    <>
      {oneProduct && (
        <div className="oneProductContainer">
          <div>
            <img
              src={oneProduct.image[1]}
              className="imgProduct"
              alt="PicOfProduct"
            />
          </div>
          <div className="textConainer">
            <h1 className="imgHeading">{oneProduct.name}</h1>
            <Stat>
              <StatLabel> {oneProduct.creator}</StatLabel>
              <StatNumber>$ {oneProduct.price}</StatNumber>
              <StatHelpText> size : {oneProduct.size}</StatHelpText>
            </Stat>
            <p className="pr">{oneProduct.description}</p>
            {state.signIn.role === "61c42c3139940ec8e18224d0" && (
              <div className="iconContainer">
                <button
                  className="deleteBtnnn"
                  onClick={() => addToCart(oneProduct._id)}
                >
                  {checkCart === 200 ? (
                    <IoCartSharp className="carticon" />
                  ) : (
                    <IoCartOutline className="carticon" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default OneProduct;
