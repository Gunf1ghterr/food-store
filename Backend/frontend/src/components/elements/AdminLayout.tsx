import { AdminHeader } from "./AdminHeader";
import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar";
import { Suspense } from "react";
import React from "react";

export const AdminLayout: React.FC = () => {
  return (
    <>
      <AdminHeader />
      <AdminNavbar />
      <Suspense
        fallback={
          <div style={{ height: "100vh" }}>
            <div className="spinner"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
