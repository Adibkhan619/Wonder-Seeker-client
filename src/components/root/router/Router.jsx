import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../../Home";
import Register from "../../Register";
import Login from "../../Login";
import AddTouristSpot from "../../AddTouristSpot";
import AllTouristSpots from "../../AllTouristSpots";
import PlaceDetails from "../../PlaceDetails";
import MyList from "../../MyList";
import PrivateRoutes from "../../PrivateRoutes";

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
            element: <PrivateRoutes><AddTouristSpot></AddTouristSpot></PrivateRoutes> 
        },
        {
            path:"/allTouristSpots",
            element: <AllTouristSpots></AllTouristSpots>,
            loader: () => fetch('http://localhost:5000/touristSpots')
        },
        {
            path: "/touristSpots/:id",
            element: <PrivateRoutes><PlaceDetails></PlaceDetails></PrivateRoutes>
            ,
            loader: ({params}) => fetch(`http://localhost:5000/touristSpots/${params.id}`)
        },
        {
            path:"/myList",
            element: <PrivateRoutes><MyList></MyList></PrivateRoutes> ,
            loader: () => fetch('http://localhost:5000/touristSpots')
        }
      ]
    },
  ]);

  export  default Router;