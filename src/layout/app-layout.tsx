import React from "react";
import { Outlet } from "react-router-dom"; // Asegúrate de reemplazar esto con el origen correcto
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto px-4 py-8">
        <Header />
        <Outlet />
      </main>
      <div className=" py-10 text-center bg-gray-800 mt-10">:)made with love</div>
    </div>
  );
};

export default AppLayout;
