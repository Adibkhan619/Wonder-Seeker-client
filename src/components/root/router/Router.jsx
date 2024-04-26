import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../../Home";
import Register from "../../Register";
import Login from "../../Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/register",
            element: <Register></Register>,    
        },
        {
            path:"/login",
            element: <Login></Login>
        }
      ]
    },
  ]);

  export  default Router;