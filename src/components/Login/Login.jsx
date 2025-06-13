import notesImg from "../../assets/notes1.png";
import { useFormik } from "formik";
import * as yup from "yup";

import Loader from "../Loader/Loader";
import axios from "axios";
 import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";







export default function Login() {

    const navigate = useNavigate()
  const validationSchema = yup.object({

    email: yup.string().email().required(),
    password: yup.string().min(6).required(),

  });

  const initialValues = {

    email: "",
    password: "",

  };

  const loginUser = (values, { setSubmitting }) => {
    axios
      .post("https://note-sigma-black.vercel.app/api/v1/users/signIn", values)
      .then((res) => {
        toast.success("Welocme")
        localStorage.setItem('token',res.data.token)
        navigate('/home')
        console.log({res});
      })
      .catch((err) => {
        toast.error(err.response.data.msg)
        // console.log(err.response.data.msg);
      })
      .finally(() => {
        setSubmitting(false);
      });

    // helpers.isSubmitting(false)
    // console.log(values);
    // console.log(helpers);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginUser,
  });


  return (
    <>
      <li className="fixed top-0 left-0 p-3 pr-5 hidden lg:flex items-center">
        <i className="fa-regular fa-note-sticky text-cyan-500 text-2xl"></i>
        <p className="pl-2 text-lg font-bold">Notes</p>
      </li>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-5/12 hidden lg:flex justify-center items-center">
            <img className="w-full p-5" src={notesImg} alt="Notes" />
          </div>

          <div className="lg:w-7/12 w-full flex justify-center items-center min-h-[calc(100vh_-_40px)] text-center">
            <div className="bg-white bg-opacity-25 shadow-md w-full max-w-md mx-auto p-5 rounded-md">
              <h1 className="font-bold text-xl">Sign In Now</h1>
              <div className="pt-3">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleBlur}
                    className="w-full p-2 my-2 border border-gray-300 rounded"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  {formik.touched.email && (
                    <p className="text-red-700">{formik.errors.email}</p>
                  )}
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleBlur}
                    className="w-full p-2 my-2 border border-gray-300 rounded"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  {formik.touched.password && (
                    <p className="text-red-700">{formik.errors.password}</p>
                  )}
                  <button
                    disabled={
                      !formik.dirty || !formik.isValid || formik.isSubmitting
                    }
                    type="submit"
                    className="bg-cyan-500 text-white w-full rounded-md mt-2 py-2 disabled:bg-red-500"
                  >
                    {formik.isSubmitting ? (
                      <h2>
                        Loading
                        <Loader />
                      </h2>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>
                <p className="mt-3">Don't Have an Account? Register Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
