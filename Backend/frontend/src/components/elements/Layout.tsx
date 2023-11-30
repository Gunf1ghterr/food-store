import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Suspense } from "react";
import React from "react";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Suspense
        fallback={
          <div style={{ height: "100vh" }}>
            <div className="spinner"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};
