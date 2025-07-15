import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNotes } from '../Context/noteContext';

export default function Layout() {
  const { notesLength } = useNotes();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern App Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-full p-3 text-white fixed top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-book text-xl"></i>
            <h1 className="text-lg font-semibold">Notes App</h1>
          </div>
    <div className="bg-gray-800 bg-opacity-20 rounded-full px-3 py-1 text-sm font-medium">
  #Notes {notesLength}
</div>
        </div>
      </header>

      {/* Main Content with proper spacing for header */}
      <main className="pt-16 pb-4 px-4 container mx-auto">
        <Outlet />
      </main>

      {/* Optional Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Notes App. All rights reserved.
      </footer>
    </div>
  );
}