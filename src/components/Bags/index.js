import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import "./style.css";

//////////////////////////////////////////////////////////////////
const Bags = (props) => {
  const [bags, setBags] = useState([]);
        let navigate = useNavigate();

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
    <>
      {bags ? (
        <div className="oneitemHomeM">
          <div className="jjj">
            {bags.map((ele) => {
              return (
                <>
                  {console.log(ele.image)}
                  <p className="BagsP1"> {ele.name}</p>
                  <img
                    className="OneBag"
                    src={ele.image}
                    alt="bags"
                    onClick={() => oneProduct(ele._id)}
                  />
                  {/* <h5> {ele.creator}</h5>
                  <h5> {ele.size}</h5>
                  <h5> {ele.price}</h5>
                  <h6>{ele.description}</h6> */}
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Bags;
