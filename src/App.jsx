import React from "react";
import "./App.css";

import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";
import Footer from "./componets/Footer/Footer";

import Curriculum from "./componets/Curriculum/Curriculum";
import Portfolio from "./componets/Portfolio/Portfolio";
import Contacts from "./componets/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route index element={<Curriculum />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>

      <Footer></Footer>


    </>
  )
};

export default App;
