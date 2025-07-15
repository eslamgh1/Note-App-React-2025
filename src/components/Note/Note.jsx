import React, { useEffect } from "react";
import "./Note.css";
import { myAxios } from "../../lib/myAxios";
import { useEditNote } from "../../Context/noteContext";



export default function Note({ note, getUserdata, handleOpen }) {
  const { setNote , setEdit} = useEditNote();

  const deleteNote = () => {
    myAxios
      .delete(
        `notes/${note._id}`
        // {
        //   headers:{
        //     token: `3b8ny__${localStorage.getItem("token")}`
        //   }
        // }
      )
      .then((res) => {
        // toast.success("Note deleted successfuly");
        getUserdata();

        // navigate('/home')
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Failed to delete note");
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
