// import { useLoaderData } from "react-router-dom";
// import Bangladesh from "./Bangladesh";
// import Cambodia from "./Cambodia";
// import Indonesia from "./Indonesia";
// import Malaysia from "./Malaysia";
// import Thailand from "./Thailand";
// import Vietnam from "./Vietnam";

import { useLoaderData, useParams } from "react-router-dom";
import TouristSpotCards from "../TouristSpotCards";


const Countries = () => {
    
    const countries = useLoaderData();
    console.log(countries);
    const {name} = useParams();
    const country = countries.filter(country => country.country == name);
    console.log(country);

    return (

        
    <div className="mx-10">
        {/* <p>{name}</p> */}
            <img src={name} alt="" />
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
            {
                
                    country.map(place => <TouristSpotCards place={place} key={place._id}></TouristSpotCards>)
                
            }
        </div>
    </div>
    );
};

export default Countries;