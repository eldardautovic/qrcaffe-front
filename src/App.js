import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin.jsx";
import { getCaffes } from "./store/caffes/caffeReducer";
import { useDispatch } from "react-redux";
import Footer from "./components/Header/Footer";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCaffes());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ucp" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
