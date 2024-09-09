import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-[#F4F6F6]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;