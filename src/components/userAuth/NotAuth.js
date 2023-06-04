import React from "react";
import { useNavigate} from "react-router-dom";
export function NotAuth(){
    let navigate = useNavigate();
    function login(){
     navigate("/login")
    }
    function signUp(){
      navigate("/singup")
    }
    return(
        <div className="wraper">
            <button className="btn btn-white" onClick={login}>login</button>
            <button className="btn btn-primary" onClick={signUp}>Sign Up</button>
        </div>
    )
}