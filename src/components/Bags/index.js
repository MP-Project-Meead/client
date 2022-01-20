import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { Card } from "antd";
import { useSelector } from "react-redux";


const Bags = (props) => {
  const [bags, setBags] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  const state = useSelector((state) => {
    return state;
  });

  const getBags = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setBags(product.data.filter((ele) => ele.category === "Bag"));
  };


  useEffect(() => {
    getBags();
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

    getBags();
  };
  
  

  return (
    <div className="photosContner">
      {bags ? (
        <>
          {bags.map((ele) => {
            return (
              <div key={ele._id} className="card">
                <Card
                  onClick={() => oneProduct(ele._id)}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={ele.image} />}
                >
                  <Meta title={ele.creator} description={ele.name} />

                   {state.signIn.role === "61c4248139940ec8e18224cc" && (
                        <button className="deleteBtn" onClick={() => deleteProduct(ele._id)}>
                          delete
                        </button>)}

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

export default Bags;
//  {
//    state.signIn.role === "61c4248139940ec8e18224cc" && (
//      <button className="deleteBtn" onClick={() => deleteProduct(ele._id)}>
//        delete
//      </button>
//    );
//  }
