import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Donations from "./components/Donations/Donations.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import CardDetails from "./components/CardDetails/CardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch('/Card.json')
      },{
        path: '/donation',
        element: <Donations></Donations>,
        loader: () => fetch('/Card.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
