import React from 'react';
import { Outlet } from 'react-router-dom';

import { useNotes } from '../Context/noteContext';

export default function Layout() {

  const {notesLength,setsetNotesLength} = useNotes()
  return (
    <>
      <div className="bg-cyan-400 w-full p-2 text-white text-center fixed top-0 z-50">
        Notes App ~ {notesLength}
      </div>
      <Outlet />
    </>
  );
}
