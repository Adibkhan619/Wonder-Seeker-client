import { useLoaderData } from "react-router-dom";
import TouristSpotCards from "./TouristSpotCards";


const AllTouristSpots = () => {

    const touristSpots = useLoaderData();
    // const []
    console.log(touristSpots);
    return (
        <div  className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
            
            {
                touristSpots.map(place => <TouristSpotCards place={place} key={place._id}></TouristSpotCards>)
                   
                
            }
        </div>
    );
};

export default AllTouristSpots;