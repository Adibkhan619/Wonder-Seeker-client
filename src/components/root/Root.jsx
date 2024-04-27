import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import { Carousel } from "react-responsive-carousel";



const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Carousel></Carousel>
            {/* <div className="max-w-screen-xl mx-auto my-5">
                <Outlet></Outlet>
            </div> */}
            
        </div>
    );
};

export default Root;