import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Route, Link, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./Context/AuthContext/context.tsx";
import "./index.css";
import Layout from "./Components/Layout.tsx";
import Dashboard from "./Pages/Dashboard/Dashboard.tsx";
import RequireAuth from "./Components/RequireAuth.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<App />} />
      <Route element={<RequireAuth />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);