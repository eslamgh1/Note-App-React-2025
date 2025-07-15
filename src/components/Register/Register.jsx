import notesImg from "../../assets/note4.png";
import { useFormik } from "formik";
import * as yup from "yup";
import Loader from "../Loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";
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
    onSubmit: registerUser,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Brand Logo */}
      <div className="fixed top-0 left-0 p-4 hidden lg:flex items-center">
        <i className="fa-regular fa-note-sticky text-indigo-600 text-3xl"></i>
        <p className="pl-2 text-xl font-bold text-indigo-800">NotesApp</p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-center">
          {/* Image Section - Hidden on mobile */}
          <div className="lg:w-1/2 hidden lg:flex justify-center items-center">
            <div className="max-w-md p-8">
              <img 
                className="w-full rounded-lg shadow-xl" 
                src={notesImg} 
                alt="Notes" 
              />
              <h2 className="text-2xl font-bold text-indigo-900 mt-6">
                Join Our Community
              </h2>
              <p className="text-indigo-700 mt-2">
                Start organizing your thoughts today.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-6 md:p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-indigo-900">
                  Create Your Account
                </h1>
                <p className="text-gray-600 mt-2">
                  Fill in your details to get started
                </p>
              </div>
              
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {formik.errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
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
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
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

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                      Age
                    </label>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      type="number"
                      name="age"
                      id="age"
                      placeholder="25"
                    />
                    {formik.touched.age && formik.errors.age && (
                      <p className="mt-1 text-sm text-red-600">
                        {formik.errors.age}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="01XXXXXXXXX"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mt-4"
                >
                  {formik.isSubmitting ? (
                    <span className="flex items-center">
                      <Loader className="mr-2" />
                      Creating Account...
                    </span>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link 
                    to="/" 
                    className="text-indigo-600 font-medium hover:text-indigo-800 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}