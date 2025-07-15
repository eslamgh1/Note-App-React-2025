import React, { useEffect } from "react";
import "./Note.css";
import { myAxios } from "../../lib/myAxios";
import { useEditNote } from "../../Context/noteContext";
import { toast } from "react-toastify"; // Add this import at the top




export default function Note({ note, getUserdata, handleOpen }) {
  const { setNote , setEdit} = useEditNote();

const deleteNote = () => {
  myAxios
    .delete(`notes/${note._id}`)
    .then(() => {
      toast.error("Note deleted", {
        position: "top-right",
        autoClose: 1000,        // Show only for 1 second
        hideProgressBar: true,  // No progress bar
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",       // Makes red background appear
      });
      getUserdata();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Delete failed", {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
      });
    });
};
  const handleEdit = () => {
    setNote(note);
    setEdit(true);
    handleOpen();
  };

  return (
    <div className="noteCard w-full p-3">
      <div className="book relative bg-white shadow-md rounded-md p-4">
        <p className="p-3">{note.content}</p>
        <div className="absolute bottom-2 flex space-x-3">
          <i
            onClick={handleEdit}
            className="fa-solid fa-pen-to-square text-xl cursor-pointer text-blue-500"
          ></i>
          <i
            onClick={deleteNote}
            className="fa-solid fa-trash text-xl cursor-pointer text-red-500"
          ></i>
        </div>
        <div className="cover bg-gray-200 p-2 rounded-md">
          <p>{note.content}</p>
        </div>
      </div>
    </div>
  );
}
