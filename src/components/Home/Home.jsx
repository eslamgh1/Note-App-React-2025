import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Home() {
  const [showModel, setShowModel] = useState(false);

const  handleOpen = ()=>{
    setShowModel(true)
  }

const  handleClose =()=>{
      setShowModel(false)
  }

  return (
    <>
      <div className="overflow-hidden flex">
        <div className="w-1/5 fixed">
          <Sidebar />
        </div>

        <div className="w-4/5 px-5 py-5 ml-auto">
          <div className="text-right mr-2">
            <button onClick={handleOpen} className="bg-cyan-500 text-white px-4 py-2 rounded-md">
              <i className="fa-solid fa-plus"></i> Add Note
              {/* {setShowModel(true)} */}
            </button>
          </div>
          <div className="grid grid-cols-1"></div>
        </div>
      </div>
      { showModel && <Modal handleClose={handleClose}/>}
    </>
  );
}
