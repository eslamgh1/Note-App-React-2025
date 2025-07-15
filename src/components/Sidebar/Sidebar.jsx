import React from 'react';

export default function Sidebar() {
  return (
    <div className="p-0 min-h-screen bg-gray-900 text-white">
      <ul className="list-none">
            {/* <li className="p-3 pr-2 hidden lg:flex items-center"></li> */}
        <li className="p-3 pr-2 flex items-center">
          <i className="fa-regular fa-note-sticky text-cyan-500 text-2xl"></i>
          <p className="pl-3 text-lg">Notes</p>
        </li>

        <li className="p-3 pr-5 hover:bg-gray-800">
          <a href="/#" className="flex items-center">
            <i className="fa-solid fa-home"></i>
            <span className="pl-2 hidden lg:inline">Home</span>
          </a>
        </li>

        <li className="p-3 pr-5 hover:bg-gray-800">
          <a href="/#" className="flex items-center">
            <i className="fa-solid fa-arrow-left"></i>
            <span className="pl-2 hidden lg:inline">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
