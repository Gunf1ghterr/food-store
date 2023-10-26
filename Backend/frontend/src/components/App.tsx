import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./elements/Footer";
import { Header } from "./elements/Header";
import { Navbar } from "./elements/Navbar";
import { HomePage } from "./pages/HomePage";
import { Payments } from "./pages/Payments";
import { Agreement } from "./pages/UserAgreement";
import { Policy } from "./pages/Policy";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<Payments />} path="/payments" />
        <Route element={<Agreement />} path="/agreement" />
        <Route element={<Policy />} path="/privacy-policy" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
