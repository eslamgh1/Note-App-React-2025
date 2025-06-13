import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <div className="bg-cyan-400 w-full p-2 text-white text-center fixed top-0">
        Notes App :
      </div>
      <Outlet />
    </>
  );
}
