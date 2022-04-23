import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./style.css";
import { storage } from "../../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { Button, Stack, Input } from "@chakra-ui/react";
const Download = () => {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
  const [product, setProduct] = useState([[]]);
  const state = useSelector((state) => {
    return state;
  });

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

  useEffect(() => {
    setProgress(0);
  }, [images]);

  const addProduct = async (e) => {
    e.preventDefault();
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

  useEffect(() => {}, [product]);

  return (
    <div className="download">
      <form onSubmit={addProduct}>
        <Stack spacing={3}>
          {/* <h1>category</h1> */}
          <Input
            variant="outline"
            name="category"
            type="text"
            placeholder="Category ex : Jewelry , shoes , Bag or clothing"
            htmlFor="first-name"
          />
          <Input variant="outline" name="name" type="text" placeholder="name" />{" "}
          <Input
            variant="outline"
            name="gender"
            type="text"
            placeholder=" ex : male or female"
          />{" "}
          <Input
            variant="outline"
            name="description"
            type="text"
            placeholder="description"
          />{" "}
          <Input
            variant="outline"
            type="text"
            name="creator"
            placeholder="creator"
          />{" "}
          <Input variant="outline" name="size" type="text" placeholder="size" />{" "}
          <Input
            variant="outline"
            name="price"
            type="text"
            placeholder="price"
          />{" "}
        </Stack>

        <label className="modelDes">image</label>
        <div
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={200}
          h={200}
        >
          <Input
            type="file"
            accept=".gif,.jpg,.jpeg,.png"
            onChange={(e) => {
              uploadPictures(e);
            }}
            id="img"
            style={{ display: "none" }}
          />{" "}
          <label htmlFor="img">upload image</label>
          {!(progress === 0) ? (
            <div className="progress">
              <p>upload successful{progress}%</p>
            </div>
          ) : null}
        </div>

        <div>
          {images?.map((image) => (
            <img src={image} alt="" width="80px" height="80px" />
          ))}
        </div>

        <Button className="submitBtn" type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Download;
