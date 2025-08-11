import React from "react";

const NavbarMobile = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-base-200 p-4 lg:hidden">
      <div className="flex items-center space-x-2">
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          className="h-10 w-10 rounded-full"
        />
        <h1 className="text-xl font-bold">Stella</h1>
      </div>
      <button
        onClick={toggleSidebar}
        className="btn btn-square btn-ghost"
        aria-label="Toggle Menu"
      >
        <ion-icon name="menu-outline" class="text-3xl"></ion-icon>
      </button>
    </nav>
  );
};

export default NavbarMobile;
