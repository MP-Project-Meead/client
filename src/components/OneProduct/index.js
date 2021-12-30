import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
/////////////////////////////////////////////////////

const OneProduct = () => {
  const id = useParams().id;
  console.log(id);
  const [oneProduct, setOneProduct] = useState([]);
 useEffect(() => {
   productOne();
 }, []);

  const productOne = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/oneProduct/${id}`
    ); 
    setOneProduct(product.data);
  }
  return (
    <div>
      {oneProduct && oneProduct.length && 
      oneProduct.map((item, index) => {
       return (
        <div key={index}>
            <p className="JewelryP1"> {item.name}</p>
            <img className="OneJewelry" src={item.image} alt="" />
            <h5> {item.creator}</h5>
            <h5> {item.size}</h5>
            <h5> {item.price}</h5>
            <h6>{item.description}</h6>
      </div>
      );
    })
    
    }
    </div>
  );
}

export default OneProduct;
