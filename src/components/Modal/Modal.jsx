import React from "react";
import { useFormik } from "formik";
import Loader from "../Loader/Loader";
// import axios from "axios";
 import { ToastContainer, toast } from 'react-toastify';
import { myAxios } from "../../lib/myAxios";
// import { useNavigate } from "react-router-dom";




export default function Modal({ handleClose ,getUserdata}) {
  //  const handleClose = props.handleClose;


  const initialValues = {
    title: "",
    content: "",
  };

  const addNote = (values, { setSubmitting }) => {
    myAxios
      .post("notes", values,
        // {
        //   headers:{
        //     token: `3b8ny__${localStorage.getItem("token")}`
        //   }
        // }
        )
      .then((res) => {
        toast.success("Done for add note");
        console.log(res)
        handleClose()
        getUserdata()
        // navigate('/home')
    
      })
      .catch((err) => {
        console.log(err)
        // toast.error(err);
        // console.log(err.response.data.msg);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues,
    onSubmit: addNote,
  });


  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/50 flex justify-center items-center w-full md:inset-0 max-h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Add Note</h3>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-4 md:p-5 space-y-4">
              <input
              onChange={formik.handleChange}
                className="w-full p-2 my-2 border border-gray-300 rounded"
                type="text"
                name="title"
                id="title"
                placeholder="Note Title"
              />
              <textarea
              onChange={formik.handleChange}
                className="w-full p-2 my-2 border border-gray-300 rounded"
                type="text"
                name="content"
                id="content"
                placeholder="Note Content"
              />
            </div>

            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
              disabled={!formik.values.title || !formik.values.content}
                type="submit"
                className= "disabled:bg-red-500 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >

                          {formik.isSubmitting ? (
                                      <h2>
                                        Loading
                                        <Loader />
                                      </h2>
                                    ) : (
                                      "Add"
                                    )}
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
