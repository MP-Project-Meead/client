import React from "react";
import "./style.css";
import Male from "./../Male";
import Female from "./../Female";
import photo1 from "../../image/Catier2.webp";
import photo2 from "../../image/Catier.png";
import photo4 from "../../image/بولقري4.png";
import photo5 from "../../image/AA.webp";
import photo7 from "../../image/Model Man.jpeg";

import photo8 from "../../image/CartierModel.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  return (
    <div>
      <Carousel
        className="carousel"
        autoPlay={true}
        infiniteLoop={true}
        interval={2000}
        thumbWidth={100}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        labels={true}
        stopOnHover={false}
      >
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo2} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo1} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo5} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo4} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo5} />
        </div>
      </Carousel>

      <div className="MaleDiv">
        <div className="maleSection">
          <h3 className="KindMale">Male</h3>
          <img alt="img" className="ModelMale" src={photo7} />
        </div>

        <Male />
      </div>
      <hr />

      <div className="FemaleDiv">
        <br />
        <Female />
        <div className="maleSection">
          <h3 className="KindFemale">Female</h3>
          <img alt="img" className="ModelMale" src={photo8} />
        </div>
      </div>
    </div>
  );
};

export default Home;
