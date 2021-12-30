import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./style.css";

//////////////////////////////////////////////////////////////////
const Jewelry = (props) => {
    let navigate = useNavigate();
  const [jewelry, setJewelry] = useState([]);

  //////////////////////////////////////////////////////////////////
  const getJewelry = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    ); 
    console.log(product , "product");
    setJewelry(product.data.filter((elem) => elem.category == "Jewelry"));

  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    getJewelry();
  }, []);

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };


  //////////////////////////////////////////////////////////////////
  

  return (
    <>
      {jewelry ? (
        <div className="oneitemHomeM">
            <div className="jjj">
                {jewelry.map((ele) => {
                    return (
                      <>
                        {console.log(ele)}
                        <p className="JewelryP1"> {ele.name}</p>
                        <img
                          className="OneJewelry"
                          src={ele.image}
                          alt=""
                          onClick={()=>oneProduct(ele._id)}
                        />
                      </>
                    );
                })}
            </div>
        </div>
      ) : ( <h1>loading ...</h1>)}
    </>
  );}

  
export default Jewelry;
