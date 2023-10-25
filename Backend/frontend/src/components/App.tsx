import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import HomePage from "./pages/HomePage";
import Payments from "./pages/Payments";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route element={<HomePage/>} path="" />
        <Route element={<Payments/>} path="/payments" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
