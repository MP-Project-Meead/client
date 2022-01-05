import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./style.css";
import { useSelector } from "react-redux";
import { Card } from "antd";


// const BASE_URL = "https://project2back.herokuapp.com";

const Cart = () => {
  let navigate = useNavigate();
  const { Meta } = Card;

  const state = useSelector((state) => {
    return state;
  });
  const [userCart, setUserCart] = useState();
  useEffect(() => {
    getUserCart();
  }, []);
  const getUserCart = async () => {
    const cart = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/userCart`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    console.log(cart.data.cart);
    setUserCart(cart.data.cart);
  };
  const goInside = (id) => {
    navigate(`/product/${id}`);
  };
  /////////////////////////////////////////////////////////////

  const deleteItem = async (id) => {
    console.log(id);
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/deleteFromCart`,
        { _id : id },
      
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
    getUserCart();
      console.log(result.data.cart);
      // setCart(result.data.cart)
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////////////////////////////////////////////
  return (
    <div className="photosContner">
      {userCart ? (
        <>
          {userCart.map((ele) => {
            return (
              <div className="card">
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src={ele.image}
                      onClick={() => goInside(ele._id)}
                    />
                  }
                >
                  <Meta title={ele.creator} description={ele.name} />
                </Card>
                <Card onClick={() => deleteItem(ele._id)}>Delete</Card>
              </div>
            );
          })}
        </>
      ) : (
        <h1>loading ...</h1>
      )}
    </div>
  );
};

export default Cart;
