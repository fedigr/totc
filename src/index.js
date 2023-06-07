import React from "react";
import {createRoot} from "react-dom";
import "./index.css";
import { App } from "./application/app";

const app =createRoot(document.getElementById("root"));
app.render(<App />)