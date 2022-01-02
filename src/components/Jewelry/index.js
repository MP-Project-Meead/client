import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";

//////////////////////////////////////////////////////////////////
const Jewelry = (props) => {
    let navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);
 const { Meta } = Card;

  //////////////////////////////////////////////////////////////////
  const getJewelry = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    ); 
    console.log(product , "product");
    setJewelry(product.data.filter((elem) => elem.category == "Jewelry"));

  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    getJewelry();
  }, []);

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };


  //////////////////////////////////////////////////////////////////
  

  return (
    <div className="photosContner">
      {jewelry ? (
        <>
          {jewelry.map((ele) => {
            return (
                <div className="card">
                  <Card
                  onClick={() => oneProduct(ele._id)}
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={ele.image} />}
                >
                  <Meta title={ele.creator} description={ele.name} />
                </Card>
              </div>
            );
          })}
        </>
      ) : (
        <h1>loading ...</h1>
      )}
    </div>
  );}

  
export default Jewelry;
