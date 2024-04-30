import { useLoaderData } from "react-router-dom";
import TouristSpotCards from "./TouristSpotCards";
import { Fade } from "react-awesome-reveal";

const AllTouristSpots = () => {

    const touristSpots = useLoaderData();

    console.log(touristSpots);

    return (
        <Fade>
            <div  className="grid grid-rows-1 lg:mt-10 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center lg:mx-10 ">
            
            {
                touristSpots.map(place => <TouristSpotCards place={place} key={place._id}></TouristSpotCards>)
                                 
            }
        </div>
        </Fade>
        
    );
};

export default AllTouristSpots;