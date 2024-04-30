import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Drawer = () => {
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
    const handleLogOut = () => {
        logOut().then().catch();
    };
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                {/* Page content here */}
                <label
                    htmlFor="my-drawer-4"
                    className="drawer-button btn font-bold btn-primary"
                >
                    Click Here!
                </label>
            </div>
            <div className="drawer-side ">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <div className="flex justify-between">
                        <h1>Dark/Light</h1>
                        <input value="" type="checkbox" 
                onChange={handleToggle} className="toggle" />
                    </div>
                    
                    {user ? (
                        <div className="lg:my-10 mx-3">

                            <img className="rounded-full" src={user.photoURL} alt="" />
                            
                            <p className="text-4xl my-5">Welcome {user.displayName}!</p>
<p className="my-2">{user.email}</p>

                            <li className="btn" onClick={handleLogOut}>
                            Log out
                        </li>
                        </div>
                        
                    ) : (
                        <ul>
                            {" "}
                            <Link to="/register">
                                <li>
                                    <a>Register</a>
                                </li>
                            </Link>
                            <Link to="/login">
                                <li>
                                    <a>Login</a>
                                </li>
                            </Link>
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
