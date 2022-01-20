import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";

const Female = (props) => {
  const [Female, setFemale] = useState([]);
  let navigate = useNavigate();

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  
  
  const getFemale = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    setFemale(
      product.data.filter((ele) => ele.gender === "female") &&
        product.data.slice(0, 10)
    );
  };


  useEffect(() => {
    getFemale();
  }); 

  
  

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
                          <img src={im} onClick={() => oneProduct(ele._id)} alt="img Of Female Products" />
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
