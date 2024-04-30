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
import UpdateTouristSpot from "../../UpdateTouristSpot";
import Countries from "../../countries/Countries";
import Error from "../../Error";
// import Bangladesh from "../../countries/Bangladesh";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/countries"),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/addTouristSpot",
                element: (
                    <PrivateRoutes>
                        <AddTouristSpot></AddTouristSpot>
                    </PrivateRoutes>
                ),
            },
            {
                path: "/allTouristSpots",
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch("http://localhost:5000/touristSpots"),
            },
            {
                path: "/touristSpots/:id",
                element: (
                    <PrivateRoutes>
                        <PlaceDetails></PlaceDetails>
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/touristSpots/${params.id}`),
            },
            {
                path: "/myList",
                element: (
                    <PrivateRoutes>
                        <MyList></MyList>
                    </PrivateRoutes>
                ),
                loader: () => fetch("http://localhost:5000/touristSpots"),
            },
            {
                path: "/updateTouristSpot/:id",
                element: <UpdateTouristSpot></UpdateTouristSpot>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/touristSpots/${params.id}`),
            },
            {
                path: "/countries",
                element: <Countries></Countries>,
                loader: () => fetch("http://localhost:5000/countries"),
            },
            {
                path: "/countries/:name",
                element: <Countries></Countries>,
                loader: () => fetch("http://localhost:5000/touristSpots"),
            },
        ],
    },
]);

export default Router;
