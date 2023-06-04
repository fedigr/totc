import React from "react";
import {createRoot} from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import "./index.css";
const app =createRoot(document.getElementById("root"));
app.render(
    <BrowserRouter>

     <Routes>
        <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>
)