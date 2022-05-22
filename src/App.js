import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Admin from "./pages/Admin.jsx";
import { getCaffes } from "./store/caffes/caffeReducer";
import { useDispatch } from "react-redux";
import Footer from "./components/Header/Footer";
import Caffe from "./components/Header/Caffe";
import Statement from "./components/Header/Statement";
import CaffePanel from "./pages/CaffePanel";
import CaffeStatement from "./components/Header/CaffeStatement";
import CaffeSettings from "./components/Header/CaffeSettings";
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
        <Route path="/ucp" element={<Admin />}></Route>
        <Route path="/ucp/:caffeId" element={<Caffe />} />
        <Route path="/ucp/izvjestaj/:caffeId" element={<Statement />} />
        <Route path="/caffe/:caffeId/izvjestaj/" element={<CaffeStatement />} />
        <Route path="/caffe/:caffeId/postavke/" element={<CaffeSettings />} />
        <Route path="/caffe/:caffeId" element={<CaffePanel />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
