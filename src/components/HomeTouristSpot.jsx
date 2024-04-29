import { useEffect, useState } from "react";
import TouristSpotCards from "./TouristSpotCards";


const HomeTouristSpot = () => {
    const  [places, setPlaces] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/touristSpots')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
                places.map(place => <TouristSpotCards key = { place._id} place={place}></TouristSpotCards>)
            }
        </div>
    );
};

export default HomeTouristSpot;