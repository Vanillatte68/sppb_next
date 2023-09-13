import Navbar from "./navbar";
import { useState } from "react";

export const metadata = {
  title: "Sistem Pencatatan Peoduksi Beras",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  
  return (
    <>
      {/* main body */}
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* sidebar */}
        <Navbar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
        {/* content */}
        <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 max-h-screen overflow-y-auto">
          {/* header */}
          <div className="main-content flex flex-col px-8 mt-9 mb-4 mx-auto">
            {/* children */}
            {children}
          </div>
        </main>
      </div>
    </>
  );
}
