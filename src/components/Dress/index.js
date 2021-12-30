import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./style.css";

//////////////////////////////////////////////////////////////////
const Dress = (props) => {
  const [dress, setDress] = useState([]);
    let navigate = useNavigate();

  //////////////////////////////////////////////////////////////////
  const getDress = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    console.log(product, "product");
    setDress(product.data.filter((ele) => ele.category == "Dress"));
  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    getDress();
  }, []);
const oneProduct = (id) => {
  console.log(id);
  navigate(`/product/${id}`);
};

  //////////////////////////////////////////////////////////////////

  return (
    <>
      {dress.length ? (
        <div className="oneitemHomeM">
          <div className="jjj">
            {dress.map((ele) => {
              return (
                <>
                  {console.log(ele.image)}
                  <p className="BagsP1"> {ele.name}</p>
                  <img
                    className="OneBag"
                    src={ele.image}
                    alt="Dress"
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

export default Dress;
