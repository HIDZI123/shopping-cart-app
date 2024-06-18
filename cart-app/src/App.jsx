/* import React from 'react' */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./style/app.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
