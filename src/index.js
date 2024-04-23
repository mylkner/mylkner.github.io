import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    createHashRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import ErrorPage from "./Routes/ErrorPage";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Skills from "./Routes/Skills";
import Contact from "./Routes/Contact";

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
            <Route index element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
