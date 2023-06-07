import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/header-img/logo.png";
import { UserAuth } from "../userAuth/userAuth";
export function Navbar({bg}){
    return(
        <div className={`navbar ${bg? "bg-primary":"bg-white"}`}>
            <div className="navbar-container">
              <div className="navbar-brand">
                 <Link to="/">
                    <img src={logo} alt="logo" />
                 </Link>
              </div>
              <div className="wraper">
                <nav className="list-link">
                   <Link to="/">home</Link>
                   <Link to="/courses">Courses</Link>
                   <Link to="/careers">careers</Link>
                   <Link to="/blog">blog</Link>
                   <Link to="/about">About Us</Link>
               </nav>
               <UserAuth />
            </div>
           </div>
        </div>
    )
}