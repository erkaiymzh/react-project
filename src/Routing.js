import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import Cart from "./components/Cart/Cart";
import EditProductForm from "./components/EditProductFForm/EditProductForm";
import LoginForm from "./components/LoginForm/LoginForm";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import RegisterForm from "./components/RegisterForm/RegisterFrom";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/edit/:id" element={<EditProductForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Routing;
