import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";
//////////////////////////////////////////////////////////////////
const Bags = (props) => {
  const [bags, setBags] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
  //////////////////////////////////////////////////////////////////
  const getBags = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setBags(product.data.filter((ele) => ele.category == "Bag"));
  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    getBags();
  }, []);

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  //////////////////////////////////////////////////////////////////

  return (
    <div className="container">
      <div className="bagsContainer">
        {bags ? (
          <>
            {bags.map((ele) => {
              return (
                <>
                  <Card
                    onClick={() => oneProduct(ele._id)}
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={ele.image} />}
                  >
                    <Meta title={ele.creator} description={ele.name} />
                  </Card>
                </>
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

export default Bags;
