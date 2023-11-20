import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { ModalCart } from "./elements/ModalCart";
import { CartProvider } from "./contexts/CartContext";
import { OfferProvider } from "./contexts/OfferContext";
import { Layout } from "./elements/Layout";
import { ErrorPage } from "./pages/ErrorPage";
import * as Pages from "./pages/LazyPages";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CurrentOrderProvider } from "./contexts/CurrentOrderContext";

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CurrentOrderProvider>
            <CartProvider>
              <OfferProvider>
                <Routes>
                  <Route element={<Layout />} path="/">
                    <Route element={<Pages.HomePage />} index />
                    <Route element={<Pages.Payments />} path="/payments" />
                    <Route element={<Pages.Agreement />} path="/agreement" />
                    <Route element={<Pages.Policy />} path="/privacy-policy" />
                    <Route element={<Pages.Offers />} path="/offers" />
                    <Route element={<Pages.About />} path="/about" />
                    <Route element={<Pages.Feedback />} path="/feedback" />
                    <Route element={<Pages.Checkout />} path="/checkout" />
                  </Route>
                  <Route element={<ErrorPage />} path="*" />
                </Routes>
                <ModalCart />
              </OfferProvider>
            </CartProvider>
          </CurrentOrderProvider>
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
