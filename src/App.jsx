import React, { useState } from "react";

import Sidebar from "./Components/Sidebar";
import HamburgerToggle from "./Components/HamburgerToggle";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function Page({ isActive, children }) {
  return (
    <div
      className={`
        absolute right-0 top-0 bg-[#282828] overflow-auto
        transition-all duration-500 ease-in-out
        ${isActive ? "top-0 scale-100 z-10" : "top-[110%] scale-50"}
        w-full md:w-[calc(100%-256px)] h-full
      `}
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState("about");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
    setSidebarOpen(false); // close sidebar on page change (mobile)
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden font-sans">
      <Sidebar activePage={activePage} onNavigate={handlePageChange} isOpen={sidebarOpen} />

      <HamburgerToggle isOpen={sidebarOpen} onToggle={toggleSidebar} />

      <Page isActive={activePage === "about"}>
        <About />
      </Page>

      <Page isActive={activePage === "resume"}>
        <Resume />
      </Page>

      <Page isActive={activePage === "portfolio"}>
        <Portfolio />
      </Page>

      <Page isActive={activePage === "blog"}>
        <Blog />
      </Page>

      <Page isActive={activePage === "contact"}>
        <Contact />
      </Page>
    </div>
  );
}
