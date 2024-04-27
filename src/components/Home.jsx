// import Countries from "./countries/Countries";

import { useLoaderData } from "react-router-dom";
import CountriesCard from "./countries/CountriesCard";

const Home = () => {
    const countries = useLoaderData();
    
    console.log(countries);

    return (
        <div>
            <h1>This is Home</h1>
            <div>
                {countries.map((country) => <CountriesCard country={country} key={country._id}></CountriesCard>)}
            </div>
        </div>
    );
};

export default Home;
