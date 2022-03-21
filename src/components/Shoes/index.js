import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Card } from "antd";
import { Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";


const Shoes = (props) => {
  const [shoes, setShoes] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
   const state = useSelector((state) => {
     return state;
   });
    const getShoes = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setShoes(product.data.filter((elem) => elem.category === "shoes"));
  };

  
  useEffect(() => {
    getShoes();
  }, []);
  const deleteProduct = async (id) => {
    console.log(id);
    await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/product/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${state.signIn.token}`,
        },
      }
    );

    setShoes();
  };

  const oneProduct = (id) => {
    navigate(`/product/${id}`);
  };

  
  return (
    <div className="photosContner2">
      {shoes ? (
        <>
          {shoes.map((ele) => {
            return (
              <div key={ele._id} className="card">
                <Card
                  onClick={() => oneProduct(ele._id)}
                  hoverable
                  style={{ xs: 2, sm: 4, md: 8 }}
                  cover={
                    <img alt="example" src={ele.image} className="imagess" />
                  }
                >
                  <Meta title={ele.creator} description={ele.name} />

                  {state.signIn.role === "61c4248139940ec8e18224cc" && (
                    <button
                      className="deleteBtn"
                      onClick={() => deleteProduct(ele._id)}
                    >
                      delete
                    </button>
                  )}
                </Card>
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

export default Shoes;
