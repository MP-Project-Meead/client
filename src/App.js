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
import Dashboard from "./components/Dashboard";
import OneUser from "./components/OneUser";
// import NotFound from "./components/NotFound";
import FAQs from "./components/FAQs";
import NewProduct from "./components/NewProduct";

// import Footer from "./components/Footer";
// import Reset from "./components/Reset";
// import NotFoundUn from "./components/NotFoundUn";

////////////////////////////////////////////////////////////////////////////////////////////
const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Jewelry" element={<Jewelry />} />
        <Route exact path="/Bags" element={<Bags />} />
        <Route exact path="/Dress" element={<Dress />} />
        <Route exact path="/Shoes" element={<Shoes />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/product/:id" element={<OneProduct />} />
        <Route exact path="/OneUser" element={<OneUser />} />
        <Route exact path="/WishList" element={<WishList />} />
        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
        <Route exact path="/ResetPassword" element={<ForgetPassword />} />
        <Route exact path="/NewProduct" element={<NewProduct />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />

        
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route exact path="/NotFoundUn" element={<NotFoundUn />} /> */}
        {/* <Route exact path="/Reset" element={<Reset />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};
export default App;
