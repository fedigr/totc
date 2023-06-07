import React from "react";
import polygon from "../../assets/header-img/Polygon.png";
import girl from "../../assets/header-img/girl.png";

export function Header(){
    return(
        <header className="main-header">
         <section className="card-column">
            <div className="card-header">
            <h1>
                <span>Studying</span> Online is now much easier
            </h1>
            </div>
            <p className="card-body">
            TOTC is an interesting platform that
            will teach you in more an interactive way
            </p>
            <div className="card-footer">
               <button className="btn btn-green rounded">joint for free</button>
            </div>
         </section>
         <section className="right">
             <img src={girl} />
         </section>
        </header>
    )
}