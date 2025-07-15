import notesImg from "../../assets/notes1.png";
import { useFormik } from "formik";
import * as yup from "yup";

import Loader from "../Loader/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
        toast.success("Welcome back!");
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginUser,
  });

  return (
    <>
      <div className="fixed top-0 left-0 p-4 hidden lg:flex items-center">
        <i className="fa-regular fa-note-sticky text-indigo-600 text-3xl"></i>
        <p className="pl-2 text-xl font-bold text-indigo-800">NotesApp</p>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-center">
            <div className="lg:w-1/2 hidden lg:flex justify-center items-center">
              <div className="max-w-md p-8">
                <img 
                  className="w-full rounded-lg shadow-xl" 
                  src={notesImg} 
                  alt="Notes" 
                />
                <h2 className="text-2xl font-bold text-indigo-900 mt-6">
                  Organize Your Thoughts
                </h2>
                <p className="text-indigo-700 mt-2">
                  Access your notes anywhere, anytime.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center items-center">
              <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-indigo-900">
                    Welcome Back
                  </h1>
                  <p className="text-gray-600 mt-2">
                    Sign in to continue to your notes
                  </p>
                </div>
                
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="your@email.com"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="password" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                    />
                    {formik.touched.password && formik.errors.password && (
                      <p className="mt-1 text-sm text-red-600">
                        {formik.errors.password}
                      </p>
                    )}
                  </div>

                  <button
                    disabled={
                      !formik.dirty || !formik.isValid || formik.isSubmitting
                    }
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {formik.isSubmitting ? (
                      <span className="flex items-center">
                        <Loader className="mr-2" />
                        Signing in...
                      </span>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <Link 
                      to="/register" 
                      className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}