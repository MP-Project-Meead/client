import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import "./style.css";

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
    <div className="containerFemale">
      {Female ? (
        <>
          {Female.map((ele, i) => {
            return (
              <>
                {ele.image &&
                  ele.image.length &&
                  ele.image.map((im, i) => {
                    return i === 0 ? (
                      <div key={im._id}>
                        <img
                          key={im._id}
                          src={im}
                          onClick={() => oneProduct(ele._id)}
                          alt="img Of Female Products"
                        />
                      </div>
                    ) : (
                      ""
                    );
                  })}
              </>
            );
          })}
        </>
      ) : (
        <h1>loading ...</h1>
      )}
    </div>
  );
};

export default Female;
