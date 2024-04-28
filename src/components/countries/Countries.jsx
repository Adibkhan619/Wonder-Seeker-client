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
            <div className="grid grid-cols-3">
            {
                
                    country.map(place => <TouristSpotCards place={place} key={place._id}></TouristSpotCards>)
                
            }
        </div>
    </div>
    );
};

export default Countries;