import React from "react";

export default function HamburgerToggle({ isOpen, onToggle }) {
  return (
    <button
      className="fixed top-4 right-4 z-60 md:hidden p-2 rounded bg-gray-900 text-white text-3xl"
      onClick={onToggle}
      aria-label="Toggle sidebar"
    >
      {/* Hamburger icon when closed, X icon when open */}
      {isOpen ? "✕" : "☰"}
    </button>
  );
}
