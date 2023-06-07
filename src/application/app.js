import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "../components/navbar/navbar";
import { Home } from "../pages/home";
export function App(){
   let[navColor , setNavColor] = useState(true)
    return(
       <Router>
         <Navbar bg={navColor}/>
        <Routes>
             <Route path='/' element={<Home />}>

                </Route>
        </Routes>
       </Router>
    )
}