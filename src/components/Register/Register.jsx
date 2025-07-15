import notesImg from "../../assets/notes1.png";
import { useFormik } from "formik";
import * as yup from "yup";

import Loader from "../Loader/Loader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    name: yup.string().min(3).max(20).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    age: yup.number().min(10).max(99).required(),
    phone: yup
      .string()
      .matches(/^01[0125][0-9]{8}$/, "Enter valid phone number")
      .required(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  };

  const registerUser = (values, { setSubmitting }) => {
    axios
      .post("https://note-sigma-black.vercel.app/api/v1/users/signUp", values)
      .then((res) => {
        toast.success("Your account is created successfully");
        navigate("/login");
        // console.log(res);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
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
    onSubmit: registerUser,
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
              <h1 className="font-bold text-xl">Sign Up Now</h1>
              <div className="pt-3">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleBlur}
                    className="w-full p-2 my-2 border border-gray-300 rounded"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                  />
                  {formik.touched.name && (
                    <p className="text-red-700">{formik.errors.name}</p>
                  )}
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
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleBlur}
                    className="w-full p-2 my-2 border border-gray-300 rounded"
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Enter Your Age"
                  />
                  {formik.touched.age && (
                    <p className="text-red-700">{formik.errors.age}</p>
                  )}
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyUp={formik.handleBlur}
                    className="w-full p-2 my-2 border border-gray-300 rounded"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                  />
                  {formik.touched.phone && (
                    <p className="text-red-700">{formik.errors.phone}</p>
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
                      "Sign Up"
                    )}
                  </button>
                </form>
                Already Have an Account?{" "}
                <Link to="/" className="text-cyan-500 font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
