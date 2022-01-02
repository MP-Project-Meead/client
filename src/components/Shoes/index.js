import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";
import { Spinner } from "@chakra-ui/react";

//////////////////////////////////////////////////////////////////

const Shoes = (props) => {
  const [shoes, setShoes] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
  //////////////////////////////////////////////////////////////////
  const getShoes = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setShoes(product.data.filter((elem) => elem.category == "Heels"));
  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    getShoes();
  }, []);

  const oneProduct = (id) => {
    navigate(`/product/${id}`);
  };

  //////////////////////////////////////////////////////////////////

  return (
    <div className="container">
      <div className="shoesContainer">
        {shoes ? (
          <>
            {shoes.map((ele) => {
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
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Shoes;
