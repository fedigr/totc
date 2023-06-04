import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/header-img/logo.png";
import { UserAuth } from "../userAuth/userAuth";
export function Navbar({}){
    return(
        <div className="navbar">
            <div className="navbar-brand">
             <img src={logo} alt="logo" />
            </div>
            <nav className="nav-list">
                <Link to="/home">home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/careers">careers</Link>
                <Link to="/blog">blog</Link>
                <Link to="/about">About Us</Link>
            </nav>
            <UserAuth />
        </div>
    )
}