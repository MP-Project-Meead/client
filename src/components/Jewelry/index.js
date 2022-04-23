import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Spinner, Stack } from "@chakra-ui/react";

const Jewelry = (props) => {
  let navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);
  const { Meta } = Card;
  const state = useSelector((state) => {
    return state;
  });
  const getJewelry = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setJewelry(product.data.filter((elem) => elem.category === "Jewelry"));
  };

  useEffect(() => {
    getJewelry();
  }, []);

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

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

    getJewelry();
  };

  return (
    <div className="photosContner2">
      {jewelry ? (
        <>
          {jewelry.map((ele) => {
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
        <Stack direction="row" spacing={4} className="progress">
          <Spinner size="xl" />
        </Stack>
      )}
    </div>
  );
};

export default Jewelry;
