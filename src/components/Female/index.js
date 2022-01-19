import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import "antd/dist/antd.css";
import { Card } from "antd";
// import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

//////////////////////////////////////////////////////////////////
const Female = (props) => {
  const [Female, setFemale] = useState([]);
  let navigate = useNavigate();
  const { Meta } = Card;
  ////////////////////////////{  oneProduct  }//////////////////////////////////////

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  // const state = useSelector((state) => {
  //   return state;
  // });

  ///////////////////////////{  getFemale  }/////////////////////////////
  const getFemale = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setFemale(
      product.data.filter((ele) => ele.gender == "female") &&
        product.data.slice(0, 10)
    );
  };

  ///////////////////////////{  useEffect  }///////////////////////////

  useEffect(() => {
    getFemale();
    console.log(Female);
  }, []);

  
  
  /////////////////////////////////////////////////////////////////////

  return (
    <div className="container">
      <div className="FemaleContainer">
        {Female ? (
          <>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {Female.map((ele, i) => {
                return (
                  <>
                    {ele.image &&
                      ele.image.length &&
                      ele.image.map((im, i) => {
                        return i === 0 ? (
                          <img src={im} onClick={() => oneProduct(ele._id)} />
                        ) : (
                          ""
                        );
                      })}
                  </>
                );
              })}
            </ImageList>
          </>
        ) : (
          <h1>loading ...</h1>
        )}
      </div>
    </div>
  );
};

export default Female;
