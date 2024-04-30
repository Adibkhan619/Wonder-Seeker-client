import { useLoaderData } from "react-router-dom";
import TouristSpotCards from "./TouristSpotCards";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AllTouristSpots = () => {

    const touristSpots = useLoaderData();

    console.log(touristSpots);

    return (
        <Fade>
             <Helmet>
        <title>Tourist Spots</title>
      </Helmet>
            <div  className="grid grid-rows-1 lg:my-10 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center mb-10  mx-1 ">
            
            {
                touristSpots.map(place => <TouristSpotCards place={place} key={place._id}></TouristSpotCards>)
                                 
            }
        </div>
        </Fade>
        
    );
};

export default AllTouristSpots;