import React from "react";
import {createRoot} from "react-dom";
import { ReactRoot } from "./Main/main";

const app =createRoot(document.getElementById("root"));
app.render(<ReactRoot />)