import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto my-5">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;