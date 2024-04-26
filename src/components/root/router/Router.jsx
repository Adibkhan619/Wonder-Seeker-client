import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../../Home";
import Register from "../../Register";
import Login from "../../Login";
import AddTouristSpot from "../../AddTouristSpot";

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
        },
        {
            path: "/addTouristSpot",
            element: <AddTouristSpot></AddTouristSpot>
        }
      ]
    },
  ]);

  export  default Router;