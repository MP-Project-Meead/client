import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
// import ImageList from "@mui/material/ImageList";

const Male = (props) => {
  const [Male, setMale] = useState([]);
  let navigate = useNavigate();

  const oneProduct = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };

  const getMale = async () => {
    const product = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/product/`
    );
    setMale(product.data.filter((ele) => ele.gender === "male"));
  };

  useEffect(() => {
    getMale();
  });

  return (
    <div className="containerMale">
    
        {Male ? (
          // eslint-disable-next-line
          <>
            {/* <ImageList
              sx={{ width: 500, height: 450 }}
              variant="quilted"
              cols={2}
              rowHeight={121}
            > */}
            {Male.map((ele) => {
              return (
                <>
                  {ele.image &&
                    ele.image.length &&
                    ele.image.map((im, i) => {
                      return i === 0 ? (
                        <div key={im._id}>
                          <img
                            className="itemImage"
                            src={im}
                            onClick={() => oneProduct(ele._id)}
                            alt="img of male Products"
                          />
                        </div>
                      ) : (
                        ""
                      );
                    })}
                </>
              );
            })}
            {/* </ImageList> */}
          </>
        ) : (
          <h1>loading ...</h1>
        )}
   
    </div>
  );
};

export default Male;
