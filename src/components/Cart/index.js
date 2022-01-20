import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./style.css";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { BsFillTrashFill } from "react-icons/bs";
import { SiApplepay } from "react-icons/si";
import { Spinner, Stack } from "@chakra-ui/react";



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
  const PayItem = (id) => {
    navigate(`/Payment/${id}`);
  };
  

  const deleteItem = async (id) => {
    console.log(state.signIn.token);
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/deleteFromCart/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      console.log(result.data);
      getUserCart();
      // setCart(result.data.cart)
    } catch (error) {
      console.log(error);
    }
  };

  
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
                  <div className="iconDelAndPay">
                    <BsFillTrashFill
                      onClick={() => deleteItem(ele._id)}
                      className="hhh"
                    />
                    <SiApplepay
                      onClick={() => PayItem(ele._id)}
                      className="hhh"
                    />
                  </div>
                </Card>
              </div>
            );
          })}
        </>
      ) : (
        <Stack direction="row" spacing={4}>
          <Spinner size="xl" />
        </Stack>
      )}
    </div>
  );
};

export default Cart;
