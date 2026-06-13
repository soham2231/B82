// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductDetails from "./Pages/ProductDetails";
import RegisterPage from "./Pages/RegisterPage";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/products/:id" element={<ProductDetails />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
