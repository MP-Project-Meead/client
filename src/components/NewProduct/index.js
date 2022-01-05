import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./style.css";
import { storage } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { useNavigate } from "react-router-dom";

const Download = () => {
  const navigate = useNavigate();
  const [add, setAddAnother] = useState([[]]);
  const [product, setProduct] = useState([[]]);
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  const { Formik } = formik;

  /////////////////////////////////////////////////////////////////////////////////////////

  const uploadPictures = (e) => {
    let image = e.target.files[0];
    const dataType = image.name.match(/\.(jpe?g|png|gif)$/gi);
    if (image == null || dataType == null) return;
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadImamge = uploadBytesResumable(storageRef, image);
    uploadImamge.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadImamge.snapshot.ref).then((url) => {
          setImages([...images, url]);
          console.log(url);
        });
      }
    );
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    setProgress(0);
  }, [images]);

  const state = useSelector((state) => {
    return state;
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  const addProduct = async (e) => {
    e.preventDefault();
    console.log(e.target.ingridents.value);
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/product/create`,

      {
        category: e.target.category.value, 
        name: e.target.name.value,
        image: images,
        gender: e.target.gender.value, 
        description: e.target.description.value,
        creator: e.target.creator.value, 
        size: e.target.size.value,
        price: e.target.size.value,
      },
      { headers: { Authorization: `Bearer ${state.signIn.token}` } }
    );

    console.log(result.data);
  };

  /////////////////////////////////////////////////////////////////////////////////////////

  const updateIngredient = (e, index) => {
      
    const myIngre = [...add];
    myIngre[index] = e.target.value;
    setAddAnother(myIngre);
  };
//   const updaterecepe = (e, index) => {
//     const myIngre = [...product];
//     myIngre[index] = e.target.value;
//     setProduct(myIngre);
//   };

  useEffect(() => {
    console.log(product);
  }, [product]);

  /////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="download">
      <form onSubmit={addProduct}>
        <label className="modelDes">category</label>
        <input name="category" type="text" placeholder="category" />
        <label className="modelDes">name</label>
        <input name="name" type="text" placeholder="name" />
        <label className="modelDes">gender</label>
        <input name="gender" type="text" placeholder="gender" />
        <label className="modelDes">description</label>
        <input name="description" type="text" placeholder="description" />
        <label className="modelDes">creator</label>
        <input name="creator" type="text" placeholder="creator" />
        <label className="modelDes">size</label>
        <input name="size" type="text" placeholder="size" />
        <label className="modelDes">price</label>
        <input name="price" type="text" placeholder="price" />

        <label className="modelDes">image</label>

        <div className="upload">
          <input
            type="file"
            accept=".gif,.jpg,.jpeg,.png"
            onChange={(e) => {
              uploadPictures(e);
            }}
            id="img"
            style={{ display: "none" }}
          />

          <label htmlFor="img">upload image</label>
          {!(progress == 0) ? (
            <div className="progress">
              <p>upload successful{progress}%</p>
            </div>
          ) : null}
        </div>


        <div className="imagesPost">
          {images?.map((image) => (
            <img src={image} width="80px" height="80px" />
          ))}
        </div>
        {/* <label className="modelDes">ingridents</label> */}

        {add.map((i, index) => (
          <input
            name="ingridents"
            type="text"
            placeholder="ingridents"
            onChange={(e) => updateIngredient(e, index)}
          ></input>
        ))}
        
        <br />
        <button onClick={() => navigate("/myprofile")} type="button">
          رجوع
        </button>

        <button className="submitBtn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default Download;
