import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Dashboard />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
