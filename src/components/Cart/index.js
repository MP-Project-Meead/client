import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { Card } from "antd";
import { BsFillTrashFill } from "react-icons/bs";
import { SiApplepay } from "react-icons/si";
import { Spinner, Stack } from "@chakra-ui/react";

////////////////////

const Cart = () => {
  let navigate = useNavigate();
  const [userCart, setUserCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const { Meta } = Card;
  const state = useSelector((state) => {
    return state;
  });
  ////////////////////
  useEffect(() => {
    getUserCart();
    // eslint-disable-next-line
  }, []);
  ////////////////////

  const getUserCart = async () => {
    const cart = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/userCart`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );
    setUserCart(cart.data.cart);

    let total = 0;
    cart.data.cart.map((ele) => (total += ele.price));
    setTotalPrice(total);
  };

  ////////////////////

  const goInside = (id) => {
    navigate(`/product/${id}`);
  };

  ////////////////////

  const PayItem = (id) => {
    navigate(`/Payment/${id}`);
  };

  ////////////////////

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
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////

  return (
    <div className="photosContnerr">
      
      {userCart ? (
        <>
          {userCart.map((ele) => {
            return (
              <>
                {console.log(totalPrice)}
                <div key={ele._id} className="cardd">
                  <div>
                    <img
                      alt="example"
                      src={ele.image}
                      onClick={() => goInside(ele._id)}
                    />
                  </div>
                  <div className="cardDisc">
                    <div>
                      <Meta
                        className="meta"
                        title={ele.creator}
                        description={ele.name}
                      />
                      <h3>${ele.price}</h3>
                    </div>
                    <div className="iconDelAndPay">
                      <BsFillTrashFill
                        onClick={() => deleteItem(ele._id)}
                        className="hhh"
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {totalPrice ? (
            <div className="cartTotal">
              <div>
                Cart Total: <span> ${totalPrice} </span>
              </div>
              <div className="checkoutContainer">
                <div> Checkout </div>
                <div className="payIconC">
                  <SiApplepay
                    onClick={() => PayItem("fff")}
                    className="payIcon"
                  />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
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