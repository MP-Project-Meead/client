import React from "react";
import "./style.css";
import Male from "./../Male";
import Female from "./../Female";

import photo1 from "../../image/Catier2.webp";
import photo2 from "../../image/Catier.png";
import photo4 from "../../image/بولقري4.png";
// import homeimage1 from "../../image/images.png";
import photo5 from "../../image/AA.webp";
import photo6 from "../../image/LV2.png";
import photo7 from "../../image/Model Man.jpeg";
import photo8 from "../../image/CartierModel.jpeg";

// import Button from "react-bootstrap/Button";
import Video from "../../video/video.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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

      <div className="video">
        <video
          controls
          autostart
          autoPlay
          src={Video}
          type="video/mp4"
          className="video1"
        />
      </div>
      <hr />
      <h3 className="KindMale">Male</h3>
      <div className="MaleDiv">
        <img alt="img" className="ModelMale" src={photo7} />

        <Male />
      </div>
      <hr />
      <h3 className="KindFemale">Female</h3>
      <div className="MaleDiv">
        <br />
        <Female />
        <img alt="img" className="ModelMale" src={photo8} />
      </div>
    </div>
  );
};

export default Home;
