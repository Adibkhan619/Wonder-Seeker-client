import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Helmet } from "react-helmet";





const Root = () => {
    return (
        <div className=" ">
            <Helmet>
            <title>Wonder Seeker | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;