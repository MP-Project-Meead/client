import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const SuccessPay = () => {
  const id = useParams().id;
  const [seconds, setSeconds] = useState(1);
const navigate = useNavigate();
const state = useSelector((state) => {
  return state;
});
  useEffect(() => {
    deleteItem();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds <= 0) {
    setTimeout(() => {
      navigate("/Home");
    }, 500);
  }

  const deleteItem = async () => {
    console.log(id);
    try {
      const result = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/product/deleteFromCart/${id}`,
        { _id: id },

        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>hhhhh</h1>
    </div>
  );
};

export default SuccessPay;
