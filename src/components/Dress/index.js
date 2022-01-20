import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Card } from "antd";


const Dress = (props) => {
  const [dress, setDress] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
  
  const getDress = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setDress(product.data.filter((ele) => ele.category === "Dress"));
  };

  

  useEffect(() => {
    getDress();
  }, []);
  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  
  return (
    <div className="container">
      <div className="dressContainer">
        {dress ? (
          <>
            {dress.map((ele) => {
              return (
                <div className="card">
                  <Card
                    onClick={() => oneProduct(ele._id)}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        alt="example"
                        src={ele.image}
                        className="derssCard"
                      />
                    }
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
    </div>
  );
};

export default Dress;
