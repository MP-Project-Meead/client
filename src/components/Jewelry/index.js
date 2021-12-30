import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "./style.css";
import { BsBookmarkCheckFill, BsBookmarkDash } from "react-icons/bs";

//////////////////////////////////////////////////////////////////
const Jewelry = (props) => {
  const [jewelry, setJewelry] = useState("");
  const [local, setLocal] = useState("");
  const [remAdd, setRemAdd] = useState([]);
  const [flag, setFlag] = useState(true);
  const [favs, setFavs] = useState([]);
  const id = useParams().id;

  //////////////////////////////////////////////////////////////////
  const getJewelry = async () => {
    // تروح تجيب البيانات من الباك اند
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    ); //"http://localhost:5000"
    console.log(product);
    setJewelry(product.data.find((elem) => elem.category == "Jewelry")); //////// <=== وتخزنهم في هذا المتغير وسويت عليها فايند بحيث تطلع لي المتغير
  };

  //////////////////////////////////////////////////////////////////

  useEffect(() => {
    // بعدين اقول له روح ادخل على هذا العنصر -- و اعطيته الباث تبعه
    getJewelry();
    // getCurrentUser();
  }, []);

  //////////////////////////////////////////////////////////////////
  
  console.log(local, "local12334");

  /////////////////////////////////////////////////////////////////
  // const getCurrentUser = () => {
  //   const currentUser = JSON.parse(localStorage.getItem("userId")) || "no user";
  //   if (currentUser !== "no user") {
  //     const userFavs = currentUser.favoriteSchema;
  //     console.log(userFavs, id);
  //     if (userFavs.includes(id)) {
  //       console.log("here");
  //       setFlag(false);
  //     }
  //   }
  // };

  /////////////////////////////////////////////////////////////////
  // const removeOrAdd = async (id) => {
  //   let userEmail = JSON.parse(localStorage.getItem("userId"));
  //   await axios
  //     .put(`${BASE_URL}/user/fav/${userEmail._id}/${id}`)
  //     .then((result) => {
  //       localStorage.setItem("userId", JSON.stringify(result.data));
  //     }); //"http://localhost:5000"
  //   setFlag(!flag);
  //   getDataEmail();
  // };

  /////////////////////////////////////////////////////////////////
  return (
    <>
      {Jewelry ? (
        <div className="oneitemHomeM">
          <div className="jjj">
            <p className="JewelryP1"> {Jewelry.name}</p>
            <img className="OneJewelry" src={Jewelry.image} alt="" />
            <h5> {Jewelry.creator}</h5>
            <h5> {Jewelry.size}</h5>
            <h5> {Jewelry.price}</h5>
            <h5> {Jewelry.price}</h5>
          </div>

          <div className="descripation">
            <h6 className="hhh">{Jewelry.description}</h6>
          </div>

          {localStorage.getItem("userId") ? (
            <div>
              <p
                className="info__button"
                id={Jewelry._id}
                // onClick={() => removeOrAdd(Jewelry._id)}
              >
                {flag ? <BsBookmarkCheckFill /> : <BsBookmarkDash />}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};

export default Jewelry;
