import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { getCaffes } from "./store/caffes/caffeReducer";
import { useDispatch } from "react-redux";

import Home from "./pages/Home";
import Admin from "./pages/Admin.jsx";
import Footer from "./components/Header/Footer";
import Caffe from "./components/Header/Caffe";
import Statement from "./components/Header/Statement";
import CaffePanel from "./pages/CaffePanel";
import CaffeStatement from "./components/Header/CaffeStatement";
import CaffeSettings from "./components/Header/CaffeSettings";

import "./App.css";
import Order from "./pages/Order";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCaffes());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ucp" element={<Admin />}></Route>
        <Route path="/ucp/:caffeId" element={<Caffe />} />
        <Route path="/ucp/izvjestaj/:caffeId" element={<Statement />} />
        <Route path="/caffe/:caffeId/izvjestaj/" element={<CaffeStatement />} />
        <Route path="/caffe/:caffeId/postavke/" element={<CaffeSettings />} />
        <Route path="/caffe/:caffeId" element={<CaffePanel />} />
        <Route path="/order/:caffeId/table/:tableId" element={<Order />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
