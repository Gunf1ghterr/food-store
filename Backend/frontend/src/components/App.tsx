import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import { Footer } from "./elements/Footer";
import { Header } from "./elements/Header";
import { Navbar } from "./elements/Navbar";
import { HomePage } from "./pages/HomePage";
import { Payments } from "./pages/Payments";
import { Agreement } from "./pages/UserAgreement";
import { Policy } from "./pages/Policy";
import { Offers } from "./pages/Offers";
import { About } from "./pages/About";
import { Feedback } from "./pages/Feedback";
import { ModalEnter } from "./elements/ModalEnter";

export const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Header onOpenModal={openModal}/>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<Payments />} path="/payments" />
        <Route element={<Agreement />} path="/agreement" />
        <Route element={<Policy />} path="/privacy-policy" />
        <Route element={<Offers />} path="/offers" />
        <Route element={<About />} path="/about" />
        <Route element={<Feedback />} path="/feedback" />
      </Routes>
      <ModalEnter isOpen={isModalOpen} onClose={closeModal}/>
      <Footer />
    </BrowserRouter>
  );
};
