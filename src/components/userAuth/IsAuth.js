import React from "react";
export function IsAuth({name ,profile}){
    return(
        <div className="wraper">
            <img src={profile} alt="profile" />
            <p>{name}</p>
        </div>
    )
}