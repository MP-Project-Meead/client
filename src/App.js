// import "./App.css";
import React  from "react";
import { Route, Routes  } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Jewelry from "./components/Jewelry";
import Bags from "./components/Bags";
import Dress from "./components/Dress";
import Shoes from "./components/Shoes";

import WishList from "./components/WishList";
import ForgetPassword from "./components/ForgetPassword";
import OneProduct from "./components/OneProduct";
import Profile from "./components/Profile";
import Users from "./components/Users";
import OneUser from "./components/OneUser";
import NotFound from "./components/NotFound";
import FAQs from "./components/FAQs";

// import Footer from "./components/Footer";
// import Reset from "./components/Reset";
// import NotFoundUn from "./components/NotFoundUn";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Jewelry" element={<Jewelry />} />
        <Route exact path="/Bags" element={<Bags />} />
        <Route exact path="/Dress" element={<Dress />} />
        <Route exact path="/Shoes" element={<Shoes />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/WishList" element={<WishList />} />
        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
        <Route exact path="/OneProduct" element={<OneProduct />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/OneUser" element={<OneUser />} />
        <Route exact path="/NotFound" element={<NotFound />} />
        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />

        {/* <Route exact path="/NotFoundUn" element={<NotFoundUn />} /> */}
        {/* <Route exact path="/Reset" element={<Reset />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default App;
