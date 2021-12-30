import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "./style.css";
//////////////////////////////////////////////////////////////////

const Shoes = (props) => {
  const [shoes, setShoes] = useState([]);
  let navigate = useNavigate();


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
    <>
      {shoes ? (
        <div className="oneitemHomeM">
          <div className="jjj">
            {shoes.map((ele) => {
              return (
                <>
                  {console.log(ele)}
                  <p className="shoesP1"> {ele.name}</p>
                  <img
                    className="Oneshoes"
                    src={ele.image}
                    alt=""
                    onClick={() => oneProduct(ele._id)}
                  />
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

export default Shoes;
