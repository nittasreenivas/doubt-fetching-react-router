import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";
import ProductDescription from "./Components/ProductDescription";
import { useState } from "react";
import Store from "./Components/Store";
import StoreDescription from "./Components/StoreDesc";
export default function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<StoreDescription />} />
          <Route
            path="/signin"
            element={<Signin user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
