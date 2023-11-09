import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage";
import { Payments } from "./pages/Payments";
import { Agreement } from "./pages/UserAgreement";
import { Policy } from "./pages/Policy";
import { Offers } from "./pages/Offers";
import { About } from "./pages/About";
import { Feedback } from "./pages/Feedback";
import { ModalCart } from "./elements/ModalCart";
import { CartProvider } from "./contexts/CartContext";
import { OfferProvider } from "./contexts/OfferContext";
import { Checkout } from "./pages/Checkout";
import { Layout } from "./elements/Layout";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <OfferProvider>
          <Routes>
            <Route element={<Layout />} path="/">
              <Route element={<HomePage />} index />
              <Route element={<Payments />} path="/payments" />
              <Route element={<Agreement />} path="/agreement" />
              <Route element={<Policy />} path="/privacy-policy" />
              <Route element={<Offers />} path="/offers" />
              <Route element={<About />} path="/about" />
              <Route element={<Feedback />} path="/feedback" />
              <Route element={<Checkout />} path="/checkout" />
            </Route>
          </Routes>

          <ModalCart />
        </OfferProvider>
      </CartProvider>
    </BrowserRouter>
  );
};
