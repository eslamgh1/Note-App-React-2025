import React from "react";
import { useFormik } from "formik";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { myAxios } from "../../lib/myAxios";
import { useEditNote } from "../../Context/noteContext";

export default function Modal({ handleClose, getUserdata }) {
  const { note, edit } = useEditNote();

  const initialValues = {
    title: edit ? note.title : "",
    content: edit ? note.content : "",
  };

  const addNote = (values, { setSubmitting }) => {
    myAxios
      .post("notes", values)
      .then(() => {
        toast.success("Note added successfully");
        handleClose();
        getUserdata();
      })
      .catch((err) => console.log(err))
      .finally(() => setSubmitting(false));
  };

  const updateNote = (values, { setSubmitting }) => {
    myAxios
      .put(`notes/${note._id}`, values)
      .then(() => {
        toast.success("Note updated successfully");
        getUserdata();
        handleClose();
      })
      .catch((err) => console.log(err))
      .finally(() => setSubmitting(false));
  };

  const formik = useFormik({
    initialValues,
    onSubmit: edit ? updateNote : addNote,
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      style={{ perspective: "2000px", width: "100%", padding: "1rem" }}
    >
      <div className="w-full max-w-md md:max-w-2xl bg-white rounded-lg shadow-xl transform transition-all duration-300">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t">
          <h3 className="text-xl font-bold text-gray-900">
            {edit ? "Update Note" : "Add Note"}
          </h3>
          <button
            onClick={handleClose}
            type="button"
            className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full p-1 transition"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="p-4 space-y-4">
            <input
              value={formik.values.title}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              type="text"
              name="title"
              id="title"
              placeholder="Note Title"
            />
            <textarea
              value={formik.values.content}
              onChange={formik.handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              name="content"
              id="content"
              placeholder="Note Content"
              rows={4}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 p-4 border-t border-gray-200">
            <button
              disabled={!formik.values.title || !formik.values.content}
              type="submit"
              className="disabled:bg-red-400 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
            >
              {formik.isSubmitting ? (
                <div className="flex items-center gap-2">
                  <span>Loading</span>
                  <Loader />
                </div>
              ) : edit ? (
                "Edit"
              ) : (
                "Add"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
