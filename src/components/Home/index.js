import React from "react";
import "./style.css";
import photo1 from "../../image/Catier2.webp";
import photo2 from "../../image/Catier.png";
// import photo3 from "../../image/بولقري2.png";
import photo4 from "../../image/بولقري4.png";
import homeimage1 from "../../image/homeimage1.jpeg";
// import Button from "react-bootstrap/Button";



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
        // showStatus={false}
        thumbWidth={100}
        showIndicators={false}
        showThumbs={false}
        dynamicHeight={false}
        labels={true}
        stopOnHover={false}
      >
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo1} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo2} />
        </div>
        {/* <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo3} />
        </div> */}
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo4} />
        </div>
      </Carousel>

      <div className="ContainerHome1">
        <div>
          <img alt="img" classNmae="imageHome1" src={homeimage1} />
        </div>
        <div>
          <p>
            The Heya Arab Fashion Show provides a collaborative environment;
            Where promising international designers, entrepreneurs and fashion
            lovers can come together to showcase and inspire and motivate
            everyone in the sector. Showcase offers the latest international
            trade collections, ready-to-wear fashion shows and daily hands-on
            workshops. Young and contemporary fashion hosts amazing fashion for
            questing shoppers.
          </p>
          {/* <Button variant="outline-warning">Warning</Button>{" "} */}
        </div>
      </div>
    </div>
  );
};

export default Home;
