import React from "react";
import "./style.css";
import photo from "../../image/huge-2560px.jpeg";


const Home = () => {
  return (
    <div>
      <img className="backImg" src={photo} alt="backImg" />
    </div>
  );
};

export default Home;
