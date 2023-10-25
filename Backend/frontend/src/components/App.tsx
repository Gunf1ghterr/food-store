import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";
import Agreement from "./pages/UserAgreement"
import Policy from "./pages/Policy"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route element={<HomePage/>} path="" />
        <Route element={<Payments/>} path="/payments" />
        <Route element={<Agreement/>} path="/agreement"/>
        <Route element={<Policy/>} path="/privacy-policy"/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
