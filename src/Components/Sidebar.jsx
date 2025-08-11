import React from "react";

export default function Sidebar({ activePage, onNavigate, isOpen }) {
  const navItems = ["about", "resume", "portfolio", "blog", "contact"];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gray-900 p-6 text-white
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        opacity-50 hover:opacity-100`}
    >
      <div className="mb-8">
        <div className="text-xl font-bold">My Portfolio</div>
      </div>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#!"
                className={`block py-3 px-4 mb-2 rounded cursor-pointer transition
                  ${
                    activePage === item
                      ? "bg-orange-500 text-white font-semibold shadow-inner opacity-100"
                      : "hover:bg-gray-700"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
