
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
// import Drawer from "./style/Drawer";
import { useContext, useEffect, useState } from "react";
// import Drawer from "./style/Drawer";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [theme, setTheme] = useState('autumn');
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme ('halloween')
        }
        else{
            setTheme('autumn')
        }
    }
    
    const Navlinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/allTouristSpots">All Tourists Spots</NavLink>
            </li>

            <li>
                <NavLink to="/addTouristSpot">Add Tourist Spot</NavLink>
            </li>

            <li>
                <NavLink to ="/myList">My List</NavLink>
            </li>
            {/* <li>
                <NavLink to ="/login">Login</NavLink>
            </li> */}
            <li>
                <NavLink to ="/register">Join Now</NavLink>
            </li>
        </>
    );

    const handleLogOut = () => {
        logOut().then().catch();
    };

    return (
        <div>
            <div className="navbar josefin glass bg-opacity-20 ">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 px-5 space-x-2 text-lg"
                        >
                            {Navlinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                        <img  className="lg:w-16 lg:h-16 w-10 h-10 rounded-full border-4 border-orange-400 " src="https://i.postimg.cc/J76hY5Cc/Dream.png" alt="" />
                    </div>
                    <h1 className="oleo text-xl ">Dream Seeker</h1>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul  className="menu menu-horizontal px-1 space-x-3 text-lg">
                        {Navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                
                    {/* <Drawer></Drawer> */}
                    {user ? (
                        <div className="flex items-center gap-2">
                            <img
                                className="w-10 h-10 border rounded-full"
                                title={user.displayName}
                                src={user.photoURL}
                                alt=""
                            />
                            <p className="hidden md:block lg:block">
                                {user.email}
                            </p>
                            {/* <Drawer></Drawer> */}

                            <button
                                onClick={handleLogOut}
                                className="btn btn-primary acme border-none"
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div>
                            {/* <Drawer></Drawer> */}
                            <NavLink to="/login">
                                <button className="btn btn-primary text-lg satisfy">Login</button>
                            </NavLink>
                            
                        </div>
                    )}
                    <div className="flex justify-between mx-2">
                        <input value="" type="checkbox" 
                onChange={handleToggle} className="toggle" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
