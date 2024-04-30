import { useEffect, useState } from "react";
import CountriesCard from "./countries/CountriesCard";
import { Fade } from "react-awesome-reveal";

const HomeCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://tourism-management-server-gold.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <Fade>
        <div className="lg:mx-24 mx-3 grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 justify-center gap-5">
            {
                countries.map(country => <CountriesCard key={country._id} country={country}></CountriesCard>)
            }
        </div></Fade>
    );
};

export default HomeCountries;