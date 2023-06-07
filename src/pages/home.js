import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
export function Home(){
    return(
        <main>
         <Header />
         <Outlet />
        </main>
    )
}