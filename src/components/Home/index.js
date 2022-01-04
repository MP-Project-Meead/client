import React from "react";
import "./style.css";
import photo1 from "../../image/Catier2.webp";
import photo2 from "../../image/Catier.png";
// import photo3 from "../../image/بولقري2.png";
import photo4 from "../../image/بولقري4.png";
import homeimage1 from "../../image/images.png";
// import Button from "react-bootstrap/Button";
import photo5 from "../../image/AA.webp";
import photo6 from "../../image/LV2.png";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../../video/video.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Home = () => {
  // const getAllProperties = async () => {
  //   const Propertie = await axios.post(
  //     `${process.env.REACT_APP_BASE_URL}/property/searchProperty`,
  //     { name: search }
  //   );
  //   setProperties(Propertie.data);
  // };
  // useEffect(() => {
  //   getAllProperties();
  // }, [search]);

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
          <img alt="img" className="propertyImges" src={photo1} />
        </div>
        <div className="imgContener">
          <img alt="img" className="propertyImges" src={photo2} />
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
      <div className="ContainerHome1">
        <div>
          <img alt="img" className="imageHome1" src={homeimage1} />
        </div>
        <div>
          <p className="paragraph">
            Bulgari , is an Italian luxury brand known for its jewellery,
            watches, fragrances, accessories, and leather goods. While the
            majority of design, production and marketing is overseen and
            executed by Bulgari, the company does, at times, partner with other
            entities. For example, Bulgari eyewear is produced through a
            licensing agreement with Luxottica, and Bulgari formed a joint
            venture with Marriott International in 2001 to launch its hotel
            brand, Bulgari Hotels & Resorts, a collection of properties and
            resort destinations around the world. Currently part of the LVMH
            Group, Bulgari was founded in the region of Epirus, Greece, in 1884
            by the silversmith Sotirios Boulgaris (Greek: Σωτήριος Βούλγαρης,
            Italian: Sotirio Bulgari) as a single jewellery shop that has, over
            the years, become an international brand. The company has evolved
            into a player in the luxury market, with an established and growing
            network of stores.on hosts amazing fashion for questing shoppers.
          </p>
          <button className="goToBrand">Warning</button>
        </div>
      </div>

      <div className="ContainerHome1">
        <div>
          <p className="paragraph">
            LV, is a French fashion house and luxury goods company founded in
            1854 by Louis Vuitton. The brand's LV letter appears on most of its
            products, from luxury bags and leather goods to ready-to-wear,
            shoes, watches, jewelry, accessories, sunglasses and books. Louis
            Vuitton is one of the world's leading international fashion houses.
            She sells her products through standalone stores, the rental
            sections of department stores, and through the e-commerce section of
            her website.
          </p>
          <button className="goToBrand">Warning</button>
        </div>
        <div>
          <img alt="img" className="LVImage" src={photo6} />
        </div>
      </div>
    </div>
  );
};

export default Home;
