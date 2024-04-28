import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import UserReview from "../style/UserReview";





const Root = () => {
    return (
        <div className=" ">
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <UserReview></UserReview> */}

        </div>
    );
};

export default Root;