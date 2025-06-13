import React from "react";
import Home from "./components/Home/Home";
import Layout from "./layouts/Layout.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import Note from "./components/Note/Note.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import { ToastContainer, toast } from 'react-toastify';

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Register /> },
      { path: "home", element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer pauseOnHover={false} position='top-left'  />
    </>
  );
}
