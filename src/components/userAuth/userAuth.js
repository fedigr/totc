import React, { useState } from "react";
import { IsAuth } from "./IsAuth";
import { NotAuth } from "./NotAuth";

export function UserAuth(){
   let [UserAuth , setUserAuth] = useState(false);
   return(
    <>
     {UserAuth ? <IsAuth />: <NotAuth />}
    </>
   )
}