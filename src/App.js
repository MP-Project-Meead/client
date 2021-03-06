import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Jewelry from "./components/Jewelry";
import Bags from "./components/Bags";
import Dress from "./components/Dress";
import Shoes from "./components/Shoes";
import Cart from "./components/Cart";
import ForgetPassword from "./components/ForgetPassword";
import ResetPssword from "./components/ResetPssword";
import OneProduct from "./components/OneProduct";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import NewProduct from "./components/NewProduct";
import Payment from "./components/Payment";
import SuccessPay from "./components/SuccessPay";
import Footer from "./components/Footer";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/signUp" element={<Signup />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Jewelry" element={<Jewelry />} />
        <Route exact path="/Bags" element={<Bags />} />
        <Route exact path="/Dress" element={<Dress />} />
        <Route exact path="/Shoes" element={<Shoes />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/product/:id" element={<OneProduct />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
        <Route exact path="/ResetPassword" element={<ForgetPassword />} />
        <Route exact path="/NewProduct" element={<NewProduct />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Payment/:id" element={<Payment />} />
        <Route exact path="/SuccessPay/:id" element={<SuccessPay />} />
        <Route exact path="/ForgetPassword" element={<ForgetPassword />} />
        <Route exact path="/ResetPssword" element={<ResetPssword />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
