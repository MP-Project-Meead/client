import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Spinner, Stack } from "@chakra-ui/react";

const Dress = () => {
  const [dress, setDress] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
  const state = useSelector((state) => {
    return state;
  });
  const getDress = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );

    console.log(product, "product");
    setDress(product.data.filter((ele) => ele.category === "clothing"));
  };

  useEffect(() => {
    getDress();
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

    getDress();
  };
  return (
    <div className="photosContner2">
      {dress ? (
        <>
          {dress.map((ele) => {
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

export default Dress;
