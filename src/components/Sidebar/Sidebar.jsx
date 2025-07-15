import React, { useState } from "react";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button (only shows on small screens) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times text-xl"></i>
          ) : (
            <i className="fas fa-bars text-xl"></i>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative z-40 min-h-screen bg-gray-900 text-white transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "w-64 translate-x-0"
              : "-translate-x-full lg:translate-x-0 w-0 lg:w-64"
          }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Brand/logo section */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center">
              <i className="fa-regular fa-note-sticky text-indigo-400 text-2xl"></i>
              <p
                className="pl-3 text-xl font-semibold"
                style={{ color: "white" }}
              >
                Notes
              </p>{" "}
            </div>
          </div>

          {/* Navigation items */}
          <ul className="py-2">
            <li className="px-4 py-3 hover:bg-gray-800 transition-colors duration-200">
              <a
                href="/#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-home w-6 text-center"></i>
                <span className="ml-3">Home</span>
              </a>
            </li>

            <li className="px-4 py-3 hover:bg-gray-800 transition-colors duration-200">
              <a
                href="/#"
                className="flex items-center text-gray-300 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-arrow-left w-6 text-center"></i>
                <span className="ml-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile (only shows when menu is open) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
