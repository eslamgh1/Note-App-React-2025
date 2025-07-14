import React from "react";
import './Note.css'

export default function Note({note}) {
  return (
    <div className="noteCard w-full p-3">
      <div className="book relative bg-white shadow-md rounded-md p-4">
        <p className="p-3">{note.content}</p>
        <div className="absolute bottom-2 flex space-x-3">
          <i className="fa-solid fa-pen-to-square text-xl cursor-pointer text-blue-500"></i>
          <i className="fa-solid fa-trash text-xl cursor-pointer text-red-500"></i>
        </div>
        <div className="cover bg-gray-200 p-2 rounded-md">
          <p>{note.content}</p>
        </div>
      </div>
    </div>
  );
}
