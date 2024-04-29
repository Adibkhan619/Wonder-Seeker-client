import { useEffect, useState } from "react";
import CountriesCard from "./countries/CountriesCard";


const HomeCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div className="lg:mx-24 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 justify-center gap-5">
            {
                countries.map(country => <CountriesCard key={country._id} country={country}></CountriesCard>)
            }
        </div>
    );
};

export default HomeCountries;