import { SideBar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
export function DashboardLayout(){
    return(
        <div className="DashBoardlayout h-screen flex">
            <SideBar/>
            <div className="main flex flex-col flex-1">
                <Header/>
                <div className="body">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}