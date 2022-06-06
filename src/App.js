import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Header />
        <Routing />
        <Footer />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
