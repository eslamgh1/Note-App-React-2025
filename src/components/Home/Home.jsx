import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { myAxios } from "../../lib/myAxios";
import Note from "../Note/Note";
import { useEffect } from "react";
import { useEditNote, useNotes } from "../../Context/noteContext";

export default function Home() {
  const [showModel, setShowModel] = useState(false);

  const [notes, setNotes] = useState([]);

  const { notesLength, setNotesLength } = useNotes();
  const { setEdit } = useEditNote();

  const handleOpen = () => {
    setShowModel(true);
  };

  const handleClose = () => {
    setShowModel(false);
  };

  const handleEdit = () => {
    setEdit(false);
    handleOpen();
  };

  const getUserdata = () => {
    myAxios
      .get("notes")
      .then((res) => {
        console.log(res);
        setNotes(res.data.notes);
        setNotesLength(res.data.notes.length);
        console.log(res.data.notes.length);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserdata();
  }, []);

  return (
    <>
      <div className="overflow-hidden flex">
        <div className="w-1/5 fixed">
          <Sidebar />
        </div>

        <div className="w-4/5 px-5 py-5 ml-auto">
          <div className="text-right mr-2">
            <button
              onClick={handleEdit}
              className="bg-cyan-500 text-white px-4 py-2 rounded-md"
            >
              <i className="fa-solid fa-plus"></i> Add Note
              {/* {setShowModel(true)} */}
            </button>
          </div>
          <div className="grid grid-cols-3">
            {notes.map((item) => {
              return (
                <Note
                  key={item._id}
                  note={item}
                  getUserdata={getUserdata}
                  handleOpen={handleOpen}
                />
              );
            })}
          </div>
        </div>
      </div>
      {showModel && (
        <Modal handleClose={handleClose} getUserdata={getUserdata} />
      )}
    </>
  );
}
