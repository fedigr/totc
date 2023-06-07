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
            <button className="btn btn-white rounded" onClick={login}>login</button>
            <button className="btn btn-primary-light rounded" onClick={signUp}>Sign Up</button>
        </div>
    )
}